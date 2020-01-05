export interface SortStrategy {
  sort(array: number[]): SortResult;
}

export interface SortResult {
  value: number[];
  swap: number;
  compare: number;
}
