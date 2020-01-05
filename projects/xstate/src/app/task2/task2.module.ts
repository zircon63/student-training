import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task2RoutingModule } from './task2-routing.module';
import { Task2Component } from './task2/task2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HashTableComponent } from './task2/hash-table.component';


@NgModule({
  declarations: [Task2Component, HashTableComponent],
  imports: [
    CommonModule,
    Task2RoutingModule,
    ReactiveFormsModule
  ]
})
export class Task2Module { }
