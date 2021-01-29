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
    const nextParent = this.nodes[a];
    const currentParent = this.nodes[b];
    this.nodes.forEach((_, index) => {
      if (this.nodes[index] === currentParent) this.nodes[index] = nextParent;
    });

    console.dir(this.nodes);
  }

  find(a: number) {}

  isConnected(a: number, b: number): boolean {
    return this.nodes[a] === this.nodes[b];
  }
}

const UF = new UnionFind(10);

UF.union(2, 4);
UF.union(7, 5);
UF.union(6, 1);
UF.union(2, 1);
UF.union(0, 8);
UF.union(0, 9);

console.log(UF.isConnected(0, 7));
