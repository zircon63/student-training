import { Component } from '@angular/core';
import { HashTable } from './shared/hash-table';
import { FormControl, Validators } from '@angular/forms';
import * as faker from 'faker';

const SIZE_HASH_TABLE = 11;
const encodedFn = item => item.split('').reduce((total, char, index) => {
  total += item.charCodeAt(index);
  return total;
}, 0);

interface StatsItem {
  number: string;
  add: number;
  find: number;
}

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component {
  itemControl = new FormControl(null, Validators.required);
  hashTable = new HashTable<string>(SIZE_HASH_TABLE, encodedFn);
  tables = this.createTables();
  keys: string[] = [];
  stats: StatsItem[] = [];

  set(value: string) {
    try {
      const result = this.hashTable.add(value);
      alert(`Количество сравнений: ${result.count}`);
    } catch (e) {
      alert(e);
    }
  }

  find(value: string) {
    const result = this.hashTable.find(value);
    if (result.value) {
      alert(`Количество сравнений: ${result.count}`);
    } else {
      alert(`Не найдено: ${value}`);
    }
  }

  generateName() {
    this.itemControl.setValue(faker.name.lastName());
  }

  generateKeys() {
    const keys = [];
    while (keys.length < 10) {
      const key = faker.name.lastName();
      if (!keys.includes(key)) {
        keys.push(key);
      }
    }
    this.keys = keys;
  }

  hashKeys() {
    this.tables = this.createTables();
    this.stats = Object.entries(this.tables).map(([name, table]) => {
      const add = this.keys.reduce((total, key) => {
        const result = table.add(key);
        total += result.count;
        return total;
      }, 0);
      const find = this.keys.reduce((total, key) => {
        const result = table.find(key);
        total += result.count;
        return total;
      }, 0);
      const statItem: StatsItem = {
        number: `Таблица #${name}`,
        add,
        find
      };
      return statItem;
    });
  }

  private createTables() {
    return {
      11: new HashTable<string>(11, encodedFn),
      13: new HashTable<string>(13, encodedFn),
      17: new HashTable<string>(17, encodedFn)
    };
  }


}
