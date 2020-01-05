import { Component, Input, OnInit } from '@angular/core';
import { HashTable } from './shared/hash-table';

@Component({
  selector: 'app-hash-table',
  template: `
    <h3>Хэш-таблица, размер {{hashTable.entries.length}}</h3>
    <table border cellpadding="10">
      <tr>
        <td>Индекс</td>
        <td *ngFor="let item of hashTable.entries; let $index=index">{{$index}}</td>
      </tr>
      <tr>
        <td>Ключ</td>
        <td *ngFor="let item of hashTable.entries;">{{item}}</td>
      </tr>
    </table>
  `,
  styles: [`
    table {
      margin-top: 10px;
      border: darkblue;
    }
  `]
})
export class HashTableComponent<T> implements OnInit {
  @Input() hashTable: HashTable<T>;

  constructor() {
  }

  ngOnInit() {
  }

}
