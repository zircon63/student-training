import { SortResult, SortStrategy } from './sort.strategy';

export class InsertSortStrategy implements SortStrategy {
  sort(array: number[]): SortResult {
    let swap = 0;
    let compare = 0;
    array = array.slice();
    for (let i = 1; i < array.length; i++) {
      const current = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > current) {
        array[j + 1] = array[j];
        j--;
        compare++;
        swap++;
      }
      array[j + 1] = current;
      swap++;
    }
    return {
      value: array,
      swap,
      compare
    };
  }

}
