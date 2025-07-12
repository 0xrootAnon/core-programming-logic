//left/right rotate array 

//left Rotate by 1
function leftRotate(arr) {
  return arr.slice(1).concat(arr[0]);
}

//right Rotate by 1
function rightRotate(arr) {
  return [arr[arr.length - 1], ...arr.slice(0, arr.length - 1)];
}

//rotate left by k
function leftRotateByK(arr, k) {
  k = k % arr.length;
  return arr.slice(k).concat(arr.slice(0, k));
}
