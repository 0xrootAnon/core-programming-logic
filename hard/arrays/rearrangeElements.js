//rearranging elements (positive-negative, even-odd) 

//seperate + merge
function rearrangePosNeg(arr) {
  const pos = [], neg = [];
  for (let num of arr) {
    if (num >= 0) pos.push(num);
    else neg.push(num);
  }
  return [...neg, ...pos];
}

//separate evens n odds
function rearrangeEvenOdd(arr) {
  const even = [], odd = [];
  for (let num of arr) {
    if (num % 2 === 0) even.push(num);
    else odd.push(num);
  }
  return [...even, ...odd];
}
