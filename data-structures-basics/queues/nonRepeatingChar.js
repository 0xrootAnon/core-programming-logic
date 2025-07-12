//first non-repeating characted in a stream

function firstNonRepeating(stream) {
  const freq = {}, q = [], res = [];
  for (let ch of stream) {
    freq[ch] = (freq[ch]||0) + 1;
    q.push(ch);
    while (q.length && freq[q[0]] > 1) q.shift();
    res.push(q[0] || '#');
  }
  return res.join('');
}
