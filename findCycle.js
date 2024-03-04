function findCycle(A, B) {
  let adj = [];
  for (let i = 0; i < B.length; i++) {
    adj[B[i][0]] ? adj[B[i][0]].push(B[i][1]) : (adj[B[i][0]] = [B[i][1]]);
  }

  let visited = new Set();
  //console.log(adj);
  for (let i = 1; i <= A; i++) {
    if (!visited.has(i)) {
      if (hasCycle(adj, i, visited)) {
        return 1;
      }
    }
  }
  return 0;
}

function hasCycle(adj, i, visited) {
  if (visited.has(i)) {
    return 1;
  }
  visited.add(i);
  //console.log(visited);
  for (let x = 0; x < (adj[i] ? adj[i].length : 0); x++) {
    if (hasCycle(adj, adj[i][x], visited)) {
      return 1;
    }
  }
  return 0;
}

let result1 = findCycle(5, [
  [1, 2],
  [4, 1],
  [2, 4],
  [3, 4],
  [5, 2],
  [1, 3],
]);

let result2 = findCycle(5, [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
]);

console.log(result1);
console.log(result2);

/*

 Time Complexity: O(N + E) where N is the number of nodes and E is the number of edges of the graph.
 Space Complexity: O(N + E) where N is the number of nodes and E is the number of edges of the graph. N+E space is used to store adjacency list of the graph and another N space is used to store the visited nodes. Total O(2N+E) = O(N+E).

*/