class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //Sona eleman ekleme
  enqueu(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  //En baştan eleman çıkarma
  dequeue() {
    if (!this.first) return null;

    const removed = this.first;

    if (this.first === this.last) this.last = null;
    this.first = removed.next;
    this.size--;
    return removed.val;
  }
}

let queue = new Queue();

console.log(queue.enqueu("Hasan"));
console.log(queue.enqueu("Furkan"));
console.log(queue.enqueu("Baltacı"));

console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());

console.log(queue);
