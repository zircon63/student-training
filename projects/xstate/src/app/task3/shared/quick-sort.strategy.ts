import { SortResult, SortStrategy } from './sort.strategy';

export class QuickSortStrategy implements SortStrategy {
  sort(array: number[]): SortResult {
    array = array.slice();
    const result: Pick<SortResult, 'swap' | 'compare'> = {
      swap: 0,
      compare: 0
    };
    partition(array, 0, array.length, result);
    return {
      value: array,
      swap: result.swap,
      compare: result.compare
    };
  }

}

function partition(array: number[], start: number, before: number, result: Pick<SortResult, 'swap' | 'compare'>): void {
  const length = before - start;
  if (length <= 1) {
    return;
  }
  const pivotIndex = start + Math.floor(Math.random() * length);
  [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];
  result.swap++;
  const pivot = array[start];
  let pivotRank = start;
  for (let index = start + 1; index < before; index++) {
    if (array[index] < pivot) {
      pivotRank++;
      [array[index], array[pivotRank]] = [array[pivotRank], array[index]];
      result.swap++;
    }
    result.compare++;
  }
  if (pivotRank !== start) {
    [array[pivotRank], array[start]] = [array[start], array[pivotRank]];
    result.swap++;
  }
  result.compare++;
  partition(array, start, pivotRank, result);
  partition(array, pivotRank + 1, before, result);
}
