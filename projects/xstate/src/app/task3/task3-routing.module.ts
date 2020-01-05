import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task3Component } from './task3/task3.component';


const routes: Routes = [
  {
    path: '',
    component: Task3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Task3RoutingModule {
}
