class UnionFind {
  private count: number;
  private nodes: number[] = [];
  private sizes: number[] = [];

  constructor(n: number) {
    this.count = n;

    for (let nodeId = 0; nodeId < this.count; nodeId++) {
      this.nodes.push(nodeId);
    }
  }

  union(a: number, b: number) {
    const aRoot = this.find(a);
    const bRoot = this.find(b);

    // this.nodes.forEach((_, index) => {
    //   if (this.nodes[index] === currentParent) this.nodes[index] = nextParent;
    // });
    const aSize = this.sizes[aRoot] || 0;
    const bSize = this.sizes[bRoot] || 0;
    const sizeSum = aSize + bSize;
    if (aRoot === bRoot) return;
    else if (aSize < bSize) {
      this.nodes[aRoot] = bRoot;
      this.sizes[bRoot] += sizeSum;
    } else {
      this.nodes[bRoot] = aRoot;
      this.sizes[aRoot] += sizeSum;
    }

    // console.dir(this.nodes);
    console.dir(this.sizes);
  }

  private find(a: number) {
    let inputA = a;
    while (inputA !== this.nodes[inputA]) {
      inputA = this.nodes[inputA];
    }
    return inputA;
  }

  isConnected(a: number, b: number): boolean {
    return this.find(this.nodes[a]) === this.find(this.nodes[b]);
  }
}

const UF = new UnionFind(10);

UF.union(4, 3);
UF.union(4, 8);
UF.union(4, 9);
UF.union(6, 0);
UF.union(6, 2);
UF.union(6, 5);
UF.union(2, 1);
UF.union(2, 7);
UF.union(6, 4);

console.log(UF.isConnected(6, 4));
