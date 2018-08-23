export class Queue {
  tail;
  head;
  queueList;
  constructor() {
    this.queueList = [];
    this.tail = null;
  }

  get head() {
    if (this.size() > 0) {
      return this.queueList[0];
    } else {
      return null;
    }
  }

  get tail() {
    if (this.size() > 0) {
      return this.queueList[this.size() - 1];
    } else {
      return null;
    }
  }

  enqueue(node) {
    this.queueList.push(node);
  }

  dequeue() {
    return this.queueList.shift();
  }

  size() {
    return this.queueList.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}
