class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos];
    }
    else {
      throw new Error ('OutOfBounds');
    }
  }

  max() {
    if (this.length !== 0) {
      return Math.max(...this.items);
    }
    else {
      throw new Error ('EmptySortedList');
    }

  }

  min() {
    if (this.length != 0) {
      return Math.min(...this.items);
    }
    else {
      throw new Error ('EmptySortedList');
    }
  }

  sum() {
    if (this.length != 0) {
      return this.items.reduce((a, b) => a + b, 0);
    }
    else {
      return 0;
    }
  }

  avg() {
    if (this.length !=0) {
      return (this.items.reduce((a, b) => a + b, 0) / this.length)
    }
    else {
      throw new Error ('EmptySortedList');
    }
  }
}

module.exports = SortedList;
