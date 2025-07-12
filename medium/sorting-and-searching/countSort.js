//count sort 
function countSort(arr) {
  const max = Math.max(...arr);
  const count = Array(max + 1).fill(0);
  for (let num of arr) count[num]++;
  const result = [];
  for (let i = 0; i <= max; i++) {
    while (count[i] > 0) {
      result.push(i);
      count[i]--;
    }
  }
  return result;
}
