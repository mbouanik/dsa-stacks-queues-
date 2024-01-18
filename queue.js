/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const node = new Node(val);
    console.log(node.val);
    if (this.isEmpty()) {
      this.first = node;
      this.last = node;
    } else {
      let cur = this.first;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
      this.last = node;
    }
    this.size += 1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    let cur = this.first;
    this.first = cur.next;

    this.size -= 1;
    cur.next = null;
    return cur.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (!this.first) {
      return true;
    }
    return false;
  }
}

module.exports = Queue;
