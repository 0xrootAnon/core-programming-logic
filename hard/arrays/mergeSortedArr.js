//merge two sorted arrays 

function mergeSorted(a, b) {
  let i = 0, j = 0, result = [];
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) result.push(a[i++]);
    else result.push(b[j++]);
  }
  return result.concat(a.slice(i)).concat(b.slice(j));
}
