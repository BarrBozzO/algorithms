export default class UnionFind {
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
