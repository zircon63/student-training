import { SortStrategy } from '../shared/sort.strategy';
import { BubbleSortStrategy } from '../shared/bubble-sort.strategy';
import { InsertSortStrategy } from '../shared/insert-sort.strategy';
import { QuickSortStrategy } from '../shared/quick-sort.strategy';

describe('Sorting', () => {
  let strategy: SortStrategy;

  describe('Сортировка пузырьком', () => {
    beforeEach(() => {
      strategy = new BubbleSortStrategy();
    });

    it('Сортировка 1', () => {
      const result = strategy.sort([1, 3, 2, 2, 4]);
      expect(result.value).toEqual([1, 2, 2, 3, 4]);
    });
    it('Сортировка 2', () => {
      const result = strategy.sort([3, 0, 0, 1, 2, 4]);
      expect(result.value).toEqual([0, 0, 1, 2, 3, 4]);
    });
  });

  describe('Сортировка вставками', () => {
    beforeEach(() => {
      strategy = new InsertSortStrategy();
    });

    it('Сортировка 3', () => {
      const result = strategy.sort([4, 3, 2, 4, 6]);
      expect(result.value).toEqual([2, 3, 4, 4, 6]);
    });
    it('Сортировка 4', () => {
      const result = strategy.sort([3, 0, 1, 2, 4, 0]);
      expect(result.value).toEqual([0, 0, 1, 2, 3, 4]);
    });
  });

  describe('Сортировка быстрая', () => {
    beforeEach(() => {
      strategy = new QuickSortStrategy();
    });

    it('Сортировка 5', () => {
      const result = strategy.sort([4, 3, 2, 4, 6]);
      expect(result.value).toEqual([2, 3, 4, 4, 6]);
    });
    it('Сортировка 6', () => {
      const result = strategy.sort([3, 0, 1, 2, 4, 0]);
      expect(result.value).toEqual([0, 0, 1, 2, 3, 4]);
    });
  });

});
