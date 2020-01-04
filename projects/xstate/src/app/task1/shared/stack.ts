export class Stack<T> {
  private _data: T[] = [];

  push(item: T) {
    this._data.push(item);
  }

  pop(): T | undefined {
    return this._data.pop();
  }

  get size() {
    return this._data.length;
  }
}
