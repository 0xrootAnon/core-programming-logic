//ount frequency of each element 

function countFrequency(arr) {
  const freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}
