import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { TodosComponent }       from './todos.component';
import { StoreModule }          from '@ngrx/store';
import { reducer }              from './store/todos.reducer';
import { EffectsModule }        from '@ngrx/effects';
import { TodosService }         from './todos.service';
import { TodosEffects }         from './store/todos.effects';
import { TodosColumnComponent } from './todos-column/todos-column.component';
import { TodoCardComponent } from './todo-card/todo-card.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('todos', reducer),
    EffectsModule.forFeature([TodosEffects])
  ],
  declarations: [
    TodosComponent,
    TodosColumnComponent,
    TodoCardComponent
  ],
  providers: [
    TodosService
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
