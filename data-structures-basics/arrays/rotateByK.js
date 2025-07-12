//method a: slice + concat
function rotateSlice(arr, k) {
  k %= arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}

//method b: reverse‑rotate trick
function rotateReverse(arr, k) {
  k %= arr.length;
  const res = [...arr];
  res.reverse();
  reverseTwoPointer(res.slice(0, k));
  reverseTwoPointer(res.slice(k));
  return res.reverse();
}

//method c: manual shifting (in‑place)
function rotateInPlace(arr, k) {
  k %= arr.length;
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}
