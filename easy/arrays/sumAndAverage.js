//Sum/average of elements 

//method 1: using loop
function sumAndAverage(arr) {
  let sum = 0;
  for (let num of arr) sum += num;
  let avg = sum / arr.length;
  return { sum, avg };
}

//method 2: using reduce
function sumAndAverageReduce(arr) {
  let sum = arr.reduce((acc, val) => acc + val, 0);
  return { sum, avg: sum / arr.length };
}
