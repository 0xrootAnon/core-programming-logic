//method a: stack
function isBalanced(expr) {
  const st = [], pairs = {')':'(','}':'{',']':'['};
  for (let ch of expr) {
    if ('([{'.includes(ch)) st.push(ch);
    else if (')]}'.includes(ch)) {
      if (st.pop() !== pairs[ch]) return false;
    }
  }
  return st.length === 0;
}

//method b: counter‑only (only for single-type ‘()’)
function isBalancedCount(expr) {
  let c = 0;
  for (let ch of expr) {
    if (ch === '(') c++;
    else if (ch === ')') c--;
    if (c < 0) return false;
  }
  return c === 0;
}
