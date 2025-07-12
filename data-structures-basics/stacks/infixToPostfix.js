function infixToPostfix(expr) {
  const prec = {'+':1,'-':1,'*':2,'/':2,'^':3}, out = [], st = [];
  for (let ch of expr.replace(/\s+/g,'')) {
    if (/\w/.test(ch)) out.push(ch);
    else if ('+-*/^'.includes(ch)) {
      while (st.length && prec[st[st.length-1]] >= prec[ch]) {
        out.push(st.pop());
      }
      st.push(ch);
    }
  }
  while (st.length) out.push(st.pop());
  return out.join(' ');
}
