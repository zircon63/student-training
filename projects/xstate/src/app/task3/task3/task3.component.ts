import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { generateArray } from '../shared/generate-array';
import { BubbleSortStrategy } from '../shared/bubble-sort.strategy';
import { InsertSortStrategy } from '../shared/insert-sort.strategy';
import { QuickSortStrategy } from '../shared/quick-sort.strategy';
import { SortStrategy } from '../shared/sort.strategy';

interface StatsItem {
  name: string;
  swap: number;
  compare: number;
}

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})
export class Task3Component implements OnInit {
  form = this.fb.group({
    count: this.fb.control(100, Validators.required),
    min: this.fb.control(-100, Validators.required),
    max: this.fb.control(100, Validators.required),
    sort: this.fb.control(['bubble'], Validators.required)
  });

  array: number[];
  sortedArray: number[];
  stats: StatsItem[] = [];
  strategies = {
    bubble: new BubbleSortStrategy(),
    insert: new InsertSortStrategy(),
    quick: new QuickSortStrategy()
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  generateArray() {
    this.array = generateArray(this.form.value);
    this.stats = this.form.value.sort.map(key => {
      const strategy: SortStrategy = this.strategies[key];
      const result = strategy.sort(this.array);
      this.sortedArray = result.value;
      return {
        name: key,
        compare: result.compare,
        swap: result.swap
      } as StatsItem;
    });
  }

}
