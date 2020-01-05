import { HashTable } from './shared/hash-table';

describe('HashTable', () => {
  let hashTable: HashTable<string>;

  beforeEach(() => {
    hashTable = new HashTable<string>(11, item => item
      .split('')
      .reduce((total, char, index) => {
        total += item.charCodeAt(index);
        return total;
      }, 0));
    const name = ['Alex', 'John', 'Max', 'Micky', 'Susan', 'Hose', 'Anna', 'Kristi', 'Poly', 'Fred'];
    new Array(10)
      .fill(0)
      .map((_, i) => name[i])
      .forEach(item => hashTable.add(item));
  });

  it('Добавление', () => {
    expect(function() {
      hashTable.add('X');
    }).not.toThrow(new Error('Нет свободных ячеек'));
  });

  it('Поиск', () => {
    hashTable.add('X');
    const item = hashTable.find('X');
    expect(item.value).toEqual(true);
  });

  it('Нет свободных ячеек', () => {
    hashTable.add('Y');
    expect(function() {
      hashTable.add('X');
    }).toThrow(new Error('Нет свободных ячеек'));
  });
});
