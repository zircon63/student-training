export class Node<T> {

  private _data: T;
  private _left: Node<T>;
  private _right: Node<T>;
  private _counter = 1;

  constructor(data: T) {
    this._data = data;
  }

  get right(): Node<T> {
    return this._right;
  }

  set right(value: Node<T>) {
    this._right = value;
  }

  get left(): Node<T> {
    return this._left;
  }

  set left(value: Node<T>) {
    this._left = value;
  }

  get data(): T {
    return this._data;
  }

  set data(value: T) {
    this._data = value;
  }

  get counter(): number {
    return this._counter;
  }

  set counter(value: number) {
    this._counter = value;
  }
}
