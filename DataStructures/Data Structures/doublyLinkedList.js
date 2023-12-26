class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;

    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let counter = 0;
    let center = Math.floor(this.length / 2);

    if (index < center) {
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }

  set(index, val) {
    let selectedNode = this.get(index);
    if (!selectedNode) return false;
    selectedNode.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;

    (prevNode.next = newNode), (nextNode.prev = newNode);
    (newNode.prev = prevNode), (newNode.next = nextNode);

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift(index);
    if (index === this.length - 1) return this.pop();

    let selectedNode = this.get(index);

    selectedNode.prev.next = selectedNode.next;
    selectedNode.next.prev = selectedNode.prev;

    selectedNode.prev = null;
    selectedNode.next = null;

    this.length--;
    return selectedNode;
  }

  reverse() {
    if (!this.head) return null;
    let node = this.tail;
    this.head = node;
    this.tail = this.head;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.prev;
      node.next = next;
      node.prev = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current);
      current = current.next;
    }
    console.log(arr);
  }
}

let list2 = new DoublyLinkedList();
list2.push("KIZILKAN");
list2.push("Hasan");
list2.push("Furkan");
list2.push("BALTACI");
list2.unshift("Begühan");
console.log(list2.insert(3, "insert edildi"));
list2.insert(1, "INSERT DENEME 2");
list2.remove(5);
// console.log(list2.get(2));

list2.print();
list2.reverse();
list2.print();
