//second largest/smallest element 

function secondLargest(arr) {
  let max = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num !== max) {
      second = num;
    }
  }
  return second;
}

function secondSmallest(arr) {
  let min = Infinity, second = Infinity;
  for (let num of arr) {
    if (num < min) {
      second = min;
      min = num;
    } else if (num < second && num !== min) {
      second = num;
    }
  }
  return second;
}
