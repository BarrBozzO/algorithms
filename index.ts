import UnionFind from "./union-find";

// Dynamic connectivity percolation
const system = [
  ...[1, 0, 1, 1, 0],
  ...[1, 1, 0, 0, 0],
  ...[0, 1, 0, 1, 1],
  ...[0, 1, 0, 1, 1],
  ...[0, 0, 1, 1, 0],
];
const size = 5;

// console output
let output = "";
for (let i = 0; i < Math.pow(size, 2); i++) {
  output += ` ${Boolean(system[i]) ? "x" : "-"} `;
  if (i > 0 && (i + 1) % size === 0) {
    console.log(output);
    output = "";
  }
}

const UF = new UnionFind(system.length + 2); // + 2 for bottom/top nodes
// union
const topNode = system.length + 1;
const bottomNode = topNode + 1;

for (let i = 0; i < system.length; i++) {
  const siteOpened = system[i];

  if (siteOpened) {
    if (i < size) {
      // top row
      UF.union(i, topNode);
    }

    if (Boolean(system[i - 1]) && i % size !== 0) {
      // left site
      UF.union(i - 1, i);
    }

    if (Boolean(system[i + 1]) && (i + 1) % size !== 0) {
      // right site
      UF.union(i + 1, i);
    }

    if (Boolean(system[i - size])) {
      // top site
      UF.union(i - size, i);
    }

    if (Boolean(system[i + size])) {
      // bottom site
      UF.union(i + size, i);
    }

    if (i > system.length - size) {
      // bottom row
      UF.union(i, bottomNode);
    }
  }
}

console.log(UF.isConnected(topNode, bottomNode));
