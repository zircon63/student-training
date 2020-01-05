import { SortResult, SortStrategy } from './sort.strategy';

export class BubbleSortStrategy implements SortStrategy {
  sort(array: number[]): SortResult {
    let swap = 0;
    let compare = 0;
    array = array.slice();
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swap++;
        }
        compare++;
      }
    }
    return {
      value: array,
      swap,
      compare
    };
  }
}
