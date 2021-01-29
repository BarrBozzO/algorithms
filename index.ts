class UnionFind {
  private count: number;
  private nodes: number[] = [];

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

    this.nodes[aRoot] = bRoot;

    console.dir(this.nodes);
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

UF.union(2, 4);
UF.union(7, 5);
UF.union(6, 1);
UF.union(2, 1);
UF.union(0, 8);
UF.union(0, 9);

console.log(UF.isConnected(6, 4));
