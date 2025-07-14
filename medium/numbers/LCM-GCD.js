//   bro im tired but okayy :(
//--------------------------------------------------------------------for GCD:-------------------------------------------------------------------------------------------------

//method 1: gcd by brute force
function gcdBrute(a, b) {
  let gcd = 1;
  const min = Math.min(a, b);
  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

//method 2: gcd by euclidean (recursive)
function gcdRecursive(a, b) {
  return b === 0 ? a : gcdRecursive(b, a % b);
}

//method 3: gcd by euclidean (iterative version)
function gcdIterative(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

//method 4: gcd - array
function gcdArray(arr) {
  return arr.reduce((acc, val) => gcdRecursive(acc, val));
}

//method 5: gcd - binary (stein's algorithm)
function binaryGCD(a, b) {
  if (a === b) return a;
  if (a === 0) return b;
  if (b === 0) return a;
  if ((a & 1) === 0 && (b & 1) === 0) {
    return binaryGCD(a >> 1, b >> 1) << 1;
  } else if ((a & 1) === 0) {
    return binaryGCD(a >> 1, b);
  } else if ((b & 1) === 0) {
    return binaryGCD(a, b >> 1);
  } else {
    return a > b ? binaryGCD((a - b) >> 1, b) : binaryGCD((b - a) >> 1, a);
  }
}

//----------------------------------------------------------------------------------for LCM---------------------------------------------------------------------------------------
//method 1: lcm by brute force
function lcmBrute(a, b) {
  let max = Math.max(a, b);
  while (true) {
    if (max % a === 0 && max % b === 0) return max;
    max++;
  }
}

//method 2: lcm using gcd
function lcmFromGcd(a, b) {
  return (a * b) / gcdRecursive(a, b);
}

//method 3: lcm - array
function lcmArray(arr) {
  return arr.reduce((acc, val) => lcmFromGcd(acc, val));
}

//method 4: lcm - recursive (for array)
function lcmRecursive(arr, index = 0) {
  if (arr.length === 1) return arr[0];
  if (index === arr.length - 1) return arr[index];
  return lcmFromGcd(arr[index], lcmRecursive(arr, index + 1));
}


//testing our hardwork
console.log("===== GCD TESTS =====");
console.log("gcdBrute(12, 18):", gcdBrute(12, 18));
console.log("gcdRecursive(12, 18):", gcdRecursive(12, 18));
console.log("gcdIterative(12, 18):", gcdIterative(12, 18));
console.log("gcdArray([12, 18, 24]):", gcdArray([12, 18, 24]));
console.log("binaryGCD(48, 18):", binaryGCD(48, 18));
console.log("\n===== LCM TESTS =====");
console.log("lcmBrute(4, 6):", lcmBrute(4, 6));
console.log("lcmFromGcd(4, 6):", lcmFromGcd(4, 6));
console.log("lcmArray([4, 6, 8]):", lcmArray([4, 6, 8]));
console.log("lcmRecursive([3, 5, 7]):", lcmRecursive([3, 5, 7]));
