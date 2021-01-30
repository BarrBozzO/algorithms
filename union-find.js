"use strict";
exports.__esModule = true;
var UnionFind = /** @class */ (function () {
    function UnionFind(n) {
        this.nodeRoots = [];
        this.ranks = [];
        this.count = n;
        for (var nodeId = 0; nodeId < this.count; nodeId++) {
            this.nodeRoots.push(nodeId);
            this.ranks.push(0);
        }
    }
    UnionFind.prototype.union = function (a, b) {
        var aRoot = this.find(a);
        var bRoot = this.find(b);
        if (aRoot === bRoot)
            return;
        if (this.ranks[aRoot] < this.ranks[bRoot]) {
            this.nodeRoots[aRoot] = bRoot;
        }
        else {
            this.nodeRoots[bRoot] = aRoot;
            if (this.ranks[aRoot] === this.ranks[bRoot])
                this.ranks[aRoot] += 1;
        }
    };
    UnionFind.prototype.find = function (a) {
        var rootNode = a;
        while (rootNode !== this.nodeRoots[rootNode]) {
            this.nodeRoots[rootNode] = this.nodeRoots[this.nodeRoots[rootNode]];
            rootNode = this.nodeRoots[rootNode];
        }
        return rootNode;
    };
    UnionFind.prototype.isConnected = function (a, b) {
        return this.find(this.nodeRoots[a]) === this.find(this.nodeRoots[b]);
    };
    return UnionFind;
}());
exports["default"] = UnionFind;
