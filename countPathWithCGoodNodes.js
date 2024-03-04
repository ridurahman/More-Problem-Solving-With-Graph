function countPathWithCGoodNodes(A, B, C) {
  let adj = [];
  for (let i = 0; i < B.length; i++) {
    adj[B[i][0]] ? adj[B[i][0]].push(B[i][1]) : (adj[B[i][0]] = [B[i][1]]);
  }
  console.log(adj);

  let goodPaths = { value: 0 };
  // let goodPaths = 0;
  countGoodPaths(1, -1, 0, A, adj, C, goodPaths);
  return goodPaths.value;
}

function countGoodPaths(root, parent, count, A, adj, C, goodPaths) {
  count += A[root - 1];
  if (count > C) {
    return;
  }
  if (adj[root]) {
    for (let x of adj[root]) {
      //goodPaths++;
      //console.log(goodPaths.value);
      countGoodPaths(x, root, count, A, adj, C, goodPaths);
    }
  } else {
    //console.log(goodPaths);
    //goodPaths++;
    goodPaths.value++;
  }
}

let result1 = countPathWithCGoodNodes(
  [0, 1, 0, 1, 1, 1],
  [
    [1, 2],
    [1, 5],
    [1, 6],
    [2, 3],
    [2, 4],
  ],
  1
);

let result2 = countPathWithCGoodNodes(
  [0, 1, 0, 1, 1, 1],
  [
    [1, 2],
    [1, 5],
    [1, 6],
    [2, 3],
    [2, 4],
  ],
  2
);

console.log(result1);
console.log(result2);

/*

 Time Complexity: O(N + E) where N is the number of nodes and E is the number of edges of the tree.
 Space Complexity: O(N + E) where N is the number of nodes and E is the number of edges of the tree.

*/