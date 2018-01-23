import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodosComponent } from './todos/todos.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
