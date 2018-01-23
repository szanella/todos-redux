import { Component, OnInit }                                                  from '@angular/core';
import { Store }                                                              from '@ngrx/store';
import { Observable }                                                         from 'rxjs/Observable';
import { Todo }                                                               from './models/todo.model';
import { TodosState }                                                         from './store/todos.reducer';
import { getCompleteTodos, getIncompleteTodos, getTodosLoading } from './store/todos.selectors';
import { LoadTodos }                                                          from './store/todos.actions';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  completeTodos$: Observable<Todo[]>;
  incompleteTodos$: Observable<Todo[]>;
  todosLoading$: Observable<boolean>;

  constructor(private store: Store<TodosState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadTodos());
    this.completeTodos$ = this.store.select(getCompleteTodos);
    this.incompleteTodos$ = this.store.select(getIncompleteTodos);
    this.todosLoading$ = this.store.select(getTodosLoading);
  }

  reloadTodos() {
    this.store.dispatch(new LoadTodos());
  }
}
