//Find largest/smallest element 

//method 1: manual loop
function findMinMax(arr) {
  let min = arr[0], max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return { min, max };
}

//method 2: using math
function findMinMaxUsingMath(arr) {
  return {min: Math.min(...arr), max: Math.max(...arr)};
}

