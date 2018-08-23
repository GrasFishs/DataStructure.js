export class Stack {
  top;
  stackList;
  constructor() {
    this.stackList = [];
  }

  get top() {
    if (this.stackList.length > 0) {
      return this.stackList[this.size() - 1];
    } else {
      return null;
    }
  }

  size() {
    return this.stackList.length;
  }

  push(node) {
    this.stackList.push(node);
  }

  pop() {
    return this.stackList.pop();
  }

  isEmpty() {
    return this.size() === 0;
  }
}
