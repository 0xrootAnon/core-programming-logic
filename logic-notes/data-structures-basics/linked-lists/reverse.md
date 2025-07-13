# Reverse a Linked List (Iterative + Recursive)

This guide explains how to reverse a singly linked list using two approaches — an **iterative loop** and a **recursive function**.

---

## Method A: Iterative

```js
function reverseListIter(head) {
  let prev = null, curr = head;
  while (curr) {
    [curr.next, prev, curr] = [prev, curr, curr.next]; // swap links
  }
  return prev; // new head of the reversed list
}
```

###  Explanation
- `prev` keeps track of the reversed list's head so far.
- `curr` moves through the original list.
- The destructuring assignment rewires the links efficiently.

###  Step-by-step
| Before            | After                      |
|-------------------|----------------------------|
| A → B → C         | A ← B ← C                  |
| `prev = null`     | `prev` becomes current node |
| `curr = head`     | `curr` moves to next node   |

---

##  Method B: Recursive

```js
function reverseListRec(head) {
  if (!head || !head.next) return head;
  const p = reverseListRec(head.next); // reverse rest
  head.next.next = head;               // point next node back to head
  head.next = null;                    // set current node's next to null
  return p; // new head
}
```

###  Explanation
- Recursively reverse the rest of the list.
- On returning, fix the direction by making `next.next = head`.

---

##  Example Input

Linked list: `1 → 2 → 3 → 4 → null`

Both methods return: `4 → 3 → 2 → 1 → null`

---

##  Time & Space Complexity

| Method     | Time | Space        |
|------------|------|--------------|
| Iterative  | O(n) | O(1)         |
| Recursive  | O(n) | O(n) (stack) |

---

