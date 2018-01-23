import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Todo } from './models/todo.model';
import { TodosState } from './store/todos.reducer';
import { getAllTodos, getTodosLoading } from './store/todos.selectors';
import { LoadTodos } from './store/todos.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;
  todosLoading$: Observable<boolean>;

  constructor(private store: Store<TodosState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadTodos());
    this.todos$ = this.store.select(getAllTodos);
    this.todosLoading$ = this.store.select(getTodosLoading);
  }

  reloadTodos() {
    this.store.dispatch(new LoadTodos());
  }
}
