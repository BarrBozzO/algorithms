class UnionFind {
  private count: number;
  private nodeRoots: number[] = [];
  private ranks: number[] = [];

  constructor(n: number) {
    this.count = n;

    for (let nodeId = 0; nodeId < this.count; nodeId++) {
      this.nodeRoots.push(nodeId);
      this.ranks.push(0);
    }
  }

  union(a: number, b: number) {
    const aRoot = this.find(a);
    const bRoot = this.find(b);

    if (aRoot === bRoot) return;

    if (this.ranks[aRoot] < this.ranks[bRoot]) {
      this.nodeRoots[aRoot] = bRoot;
    } else {
      this.nodeRoots[bRoot] = aRoot;
      if (this.ranks[aRoot] === this.ranks[bRoot]) this.ranks[aRoot] += 1;
    }

    // console.dir(this.nodeRoots);
    console.dir(this.ranks);
  }

  private find(a: number) {
    let rootNode = a;

    while (rootNode !== this.nodeRoots[rootNode]) {
      this.nodeRoots[rootNode] = this.nodeRoots[this.nodeRoots[rootNode]];
      rootNode = this.nodeRoots[rootNode];
    }
    return rootNode;
  }

  isConnected(a: number, b: number): boolean {
    return this.find(this.nodeRoots[a]) === this.find(this.nodeRoots[b]);
  }
}

const UF = new UnionFind(10);

UF.union(4, 3);
UF.union(5, 8);
UF.union(2, 9);
UF.union(6, 1);
UF.union(6, 2);
UF.union(7, 5);
UF.union(2, 9);
UF.union(9, 7);
UF.union(6, 4);

console.log(UF.isConnected(9, 3));
