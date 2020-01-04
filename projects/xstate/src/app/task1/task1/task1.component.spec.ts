import { BinarySearchTree } from '../shared/binary-search-tree';

describe('BinarySearchTree', () => {
  let tree: BinarySearchTree<number>;

  xdescribe('Удаление вершины', () => {
    const array = [1, 1, 2, -1, 20, 3, -1];
    beforeEach(() => {
      tree = new BinarySearchTree<number>();
      array.forEach(number => tree.addNode(number));
    });

    it(`Удаление вершины 1 - 1 раз`, () => {
      let node = tree.findNode(1);
      expect(node).toBeDefined();
      expect(node.counter).toEqual(2);
      tree.removeNode(1);
      node = tree.findNode(1);
      expect(node).toBeDefined();
      expect(node.data).toEqual(1);
      expect(node.counter).toEqual(1);
    });
    it(`Удаление вершины 20 - 1 раз`, () => {
      let node = tree.findNode(20);
      expect(node).toBeDefined();
      expect(node.counter).toEqual(1);
      tree.removeNode(20);
      node = tree.findNode(20);
      expect(node).toBeNull();
    });
    it(`Удаление вершины 1 - 2 раза`, () => {
      let node = tree.findNode(1);
      expect(node).toBeDefined();
      expect(node.counter).toEqual(2);
      tree.removeNode(1);
      tree.removeNode(1);
      node = tree.findNode(1);
      expect(node).toBeNull();
    });

    it('Удаление несуществующей вершины', () => {
      tree.removeNode(0);
      const node = tree.findNode(0);
      expect(node).toBeNull();
    });
  });
  xdescribe('Поиск вершины', () => {
    const array = [1, 2, 2, 4, 4, 4, 10, 15, 25, 25, 25, 25];
    const counterExpect = {
      2: 2,
      4: 3,
      25: 4
    };
    const arrayNotIncluded = [3, 5, 7, 9, -1];
    beforeAll(() => {
      tree = new BinarySearchTree<number>();
      array.forEach(number => tree.addNode(number));
    });
    array.forEach(number => {
      it(`Узел ${number} найден`, () => {
        const node = tree.findNode(number);
        expect(node).toBeDefined();
        expect(node.data).toEqual(number);
      });
    });
    arrayNotIncluded.forEach(number => {
      it(`Узел ${number} не найден`, () => {
        const node = tree.findNode(number);
        expect(node).toBeNull();
      });
    });
    Object.entries(counterExpect).forEach(([number, counter]) => {
      it(`Узел ${number} появился ${counter} раза`, function() {
        const node = tree.findNode(Number(number));
        expect(node).toBeDefined();
        expect(node.data).toEqual(Number(number));
        expect(node.counter).toEqual(counter);
      });
    });

  });

  describe('Обход дерева', () => {
    const array = [40, 30, 20, 50, 60];
    beforeEach(() => {
      tree = new BinarySearchTree<number>();
      array.forEach(number => tree.addNode(number));
    });
    it('Симметричный обход', function() {
      const result: {
        value: number,
        depth: number
      }[] = [];
      const expectation: {
        value: number,
        depth: number
      }[] = [
        {
          value: 20,
          depth: 2
        },
        {
          value: 30,
          depth: 1
        },
        {
          value: 40,
          depth: 0
        },
        {
          value: 50,
          depth: 1
        },
        {
          value: 60,
          depth: 2
        }
      ];
      tree.symmetricOrder((node, depth) => result.push({
        depth,
        value: node.data
      }));
      expect(result.length).toBeGreaterThan(0);
      result.forEach(({ value, depth }, index) => {
        const expectationElement = expectation[index];
        expect(value).toEqual(expectationElement.value);
        expect(depth).toEqual(expectationElement.depth);
      });
    });
    it('Обратно-симметричный обход', function() {
      const result: {
        value: number,
        depth: number
      }[] = [];
      const expectation: {
        value: number,
        depth: number
      }[] = [
        {
          value: 20,
          depth: 2
        },
        {
          value: 30,
          depth: 1
        },
        {
          value: 60,
          depth: 2
        },
        {
          value: 50,
          depth: 1
        },
        {
          value: 40,
          depth: 0
        }
      ];
      tree.inverseSymmetricOrder((node, depth) => result.push({
        depth,
        value: node.data
      }));
      expect(result.length).toBeGreaterThan(0);
      result.forEach(({ value, depth }, index) => {
        const expectationElement = expectation[index];
        expect(value).toEqual(expectationElement.value);
        expect(depth).toEqual(expectationElement.depth);
      });
    });
  });


});
