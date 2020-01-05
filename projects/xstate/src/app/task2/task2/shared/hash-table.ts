export type EncodeNumberFunction<T> = (item: T) => number;

export interface HashResult<T> {
  count: number;
  value: T;
}

export class HashTable<T> {
  private readonly array: Array<T>;

  constructor(private size: number,
              private encodedNumberFn: EncodeNumberFunction<T>) {
    this.array = new Array<T>(this.size).fill(undefined);
  }

  add(item: T): HashResult<number> {
    let count = 0;
    const index = this.hash(item);
    if (this.isEmpty(index)) {
      this.set(index, item);
      return {
        count,
        value: index
      };
    } else {
      const element = this.get(index);
      if (element === item) {
        // повторный ключ
        console.warn('Повторный ключ: ', element);
        return {
          count,
          value: index
        };
      } else {
        const hashResult: HashResult<number> = this.getFirstEmptyIndex(index, (i) => {
          count++;
          if (this.isEmpty(i)) {
            return {
              count: count,
              value: i
            };
          }
        });
        if (hashResult) {
          this.set(hashResult.value, item);
          return hashResult;
        } else {
          throw new Error('Нет свободных ячеек');
        }
      }
    }
  }

  find(item: T): HashResult<boolean> | null {
    let count = 0;
    const index = this.hash(item);
    if (this.isEmpty(index)) {
      return {
        value: false,
        count: count
      };
    } else {
      const element = this.get(index);
      if (element === item) {
        return {
          value: true,
          count: count
        };
      } else {
        return this.getFirstEmptyIndex(index, i => {
          count++;
          const e = this.get(i);
          if (e === item) {
            return {
              value: true,
              count: count
            };
          }
          if (this.isEmpty(i)) {
            return {
              value: false,
              count: count
            };
          }
        });
      }
    }
  }

  get entries() {
    return this.array;
  }

  private getFirstEmptyIndex<R>(hash: number, breakFn: (index: number) => HashResult<R> | void): HashResult<R> | null {
    for (let i = 0; i <= this.size - 2; i++) {
      const index = this.resolveIndex(hash, i, this.size);
      const result = breakFn(index);
      if (result) {
        return result;
      }
    }
    return null;
  }

  private set(index: number, value: T) {
    this.array[index] = value;
    if (this.array.length !== this.size) {
      throw Error('Увеличение размера');
    }
  }

  private get(index: number): T {
    return this.array[index];
  }

  private isEmpty(index: number): boolean {
    return !this.array[index];
  }

  private hash(item: T): number {
    return (this.encodedNumberFn(item) % this.size);
  }

  private resolveIndex(hash: number, i: number, size: number): number {
    return ((hash + i) % size);
  }
}
