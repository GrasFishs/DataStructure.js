class PolyNode {
  coef = 0;
  expn = 0;
  next = null;
  prev = null;
  constructor(coef, expn, prev, next) {
    this.coef = coef;
    this.expn = expn;
    this.prev = prev;
    this.next = next;
  }
}

export class Polynomial {
  head;
  tail;
  size = 0;
  constructor(polyArr) {
    this.tail = new PolyNode(null, null, null, null);
    this.head = new PolyNode(null, null, null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.init(polyArr);
    this.optimization();
  }

  init(polyArr) {
    polyArr.forEach(node => {
      if (node && node.coef !== 0) {
        this.append(new PolyNode(node.coef, node.expn, null));
      }
    });
  }

  append(node) {
    this.link(this.tail.prev, node);
    this.link(node, this.tail);
    this.size++;
  }

  remove(node) {
    this.link(node.prev, node.next);
    node = null;
    this.size--;
  }

  /**
   * 链接两个结点
   * @param {PolyNode} a
   * @param {PolyNode} b
   */
  link(a, b) {
    a.next = b;
    b.prev = a;
  }

  isTail(node) {
    return node === this.tail;
  }

  optimization() {
    for (let p = this.head.next; !this.isTail(p); p = p.next) {
      for (let q = p.next; !this.isTail(q); q = q.next) {
        if (p.expn && q.expn && p.expn === q.expn) {
          p.coef = p.coef + q.coef;
          if (p.coef === 0) {
            p.expn = 0;
          }
          this.remove(q);
        }
        // TODO sort
      }
    }
  }

  /**
   * 加
   * @param {Polynomial} polynomial
   */
  plus(polynomial) {
    const list = new Polynomial([]);
    let p1 = this.head.next;
    let p2 = polynomial.head.next;
    while (!this.isTail(p1) && !this.isTail(p2)) {
      if (p1.expn === p2.expn) {
        const coef = p1.coef + p2.coef;
        if (coef !== 0) {
          list.append(new PolyNode(coef, p1.expn, null));
        }
      } else {
        list.append(new PolyNode(p1.coef, p1.expn, null));
        list.append(new PolyNode(p2.coef, p2.expn, null));
      }
      p1 = p1.next;
      p2 = p2.next;
    }
    while (!this.isTail(p1)) {
      list.append(new PolyNode(p1.coef, p1.expn, null));
      p1 = p1.next;
    }
    while (!polynomial.isTail(p2)) {
      list.append(new PolyNode(p2.coef, p2.expn, null));
      p2 = p2.next;
    }
    list.optimization();
    return list;
  }

  toString() {
    let str = "";
    for (let i = this.head.next; !this.isTail(i); i = i.next) {
      const op =
        i.coef < 0
          ? "<span class='op'>-</span>"
          : str === ""
            ? ""
            : "<span class='op'>+</span>";
      const coef = `${op}<span class='coef'>${Math.abs(i.coef)}</span>`;
      const expn = i.expn !== 1 ? `<span class='expn'>${i.expn}</span>` : "";
      const num =
        i.expn === 0 ? coef : `${coef}<span class='x'>x</span>${expn}`;
      str += `<span class='item'>${num}</span>`;
    }
    return str;
  }
}
