import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task3RoutingModule } from './task3-routing.module';
import { Task3Component } from './task3/task3.component';


@NgModule({
  declarations: [Task3Component],
  imports: [
    CommonModule,
    Task3RoutingModule
  ]
})
export class Task3Module { }
