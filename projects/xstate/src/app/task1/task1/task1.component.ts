import { Component, OnInit } from '@angular/core';
import { BinarySearchTree } from '../shared/binary-search-tree';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component implements OnInit {
  tree: BinarySearchTree<number> = new BinarySearchTree<number>();
  itemControl = new FormControl(null, Validators.required);
  symmetric: {
    value: number,
    depth: number
  }[] = [];
  inverseSymmetric: {
    value: number,
    depth: number
  }[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  add(item: number) {
    this.tree.addNode(item);
    this.refreshView();
  }

  remove(item: number) {
    this.tree.removeNode(item);
    this.refreshView();
  }

  find(item: number) {
    const node = this.tree.findNode(item);
    if (node) {
      alert(`Значение вершины: ${node.data} Счетчик появления: ${node.counter}`);
    } else {
      alert(`Вершина не найдена`);
    }
  }

  private refreshView() {
    this.symmetric = [];
    this.inverseSymmetric = [];
    this.tree.symmetricOrder((node, depth) => this.symmetric.push({ value: node.data, depth }));
    this.tree.inverseSymmetricOrder((node, depth) => this.inverseSymmetric.push({ value: node.data, depth }));
  }

}
