//method a: iterative
function reverseListIter(head) {
  let prev = null, curr = head;
  while (curr) {
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }
  return prev;
}

//method b: recursive
function reverseListRec(head) {
  if (!head || !head.next) return head;
  const p = reverseListRec(head.next);
  head.next.next = head;
  head.next = null;
  return p;
}
