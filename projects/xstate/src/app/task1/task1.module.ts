import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task1RoutingModule } from './task1-routing.module';
import { Task1Component } from './task1/task1.component';


@NgModule({
  declarations: [Task1Component],
  imports: [
    CommonModule,
    Task1RoutingModule
  ]
})
export class Task1Module { }
