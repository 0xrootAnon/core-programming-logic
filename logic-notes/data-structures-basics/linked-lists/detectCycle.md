#  Floyd’s Tortoise and Hare Algorithm (Cycle Detection in Linked List)

- This algorithm efficiently checks whether a linked list contains a cycle using two pointers moving at different speeds.

---

## Floyd's Cycle Detection

```js
function hasCycle(head) {
  let slow = head, fast = head;      // 🐢 slow = 1 step, 🐇 fast = 2 steps
  while (fast && fast.next) {        // fast must not reach end
    slow = slow.next;                // move slow by 1
    fast = fast.next.next;           // move fast by 2
    if (slow === fast) return true;  // pointers meet → cycle exists
  }
  return false;                      // fast hit null → no cycle
}
```

---

##  Logic

- **If no cycle:** Fast pointer reaches `null`.
- **If cycle exists:** Fast eventually "laps" slow and both meet.
- **Works in O(n)** time and **O(1)** space — no extra memory.

---

##  Intuition

| Pointer | Speed | Description               |
|---------|--------|---------------------------|
| `slow`  | 1 step | Moves one node at a time  |
| `fast`  | 2 steps| Moves two nodes at a time |
| If they meet → loop exists. Otherwise → list ends safely. |

---

##  Example

```js
const node3 = { val: 3, next: null };
const node2 = { val: 2, next: node3 };
const node1 = { val: 1, next: node2 };
node3.next = node2;  // Create a cycle
console.log(hasCycle(node1)); // true
```

---

##  Time and Space

| Metric     | Value   |
|------------|---------|
| Time       | O(n)    |
| Space      | O(1)    |
| Mutation   |  No    |

---
