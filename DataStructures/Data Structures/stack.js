class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //En başa eleman ekleme
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let currentFirst = this.first;
      this.first = newNode;
      this.first.next = currentFirst;
    }
    return ++this.size;
  }

  //En baştan eleman çıkarma
  pop() {
    if (!this.first) return null;

    const removed = this.first;

    if (this.first === this.last) this.last = null;

    this.first = removed.next; // sadece bir eleman varsa next değeri null olduğu için first burda null yapılır.

    this.size--;
    return removed.val;
  }
}

let stack = new Stack();

console.log(stack.push("BALTACI"));

console.log(stack.push("FURKAN"));
console.log(stack.push("HASAN"));

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
// console.log(stack.pop());

console.log(stack);
