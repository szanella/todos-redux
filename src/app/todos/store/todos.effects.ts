import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { TodosService } from '../todos.service';
import { Todo } from '../models/todo.model';
import * as todosActions from './todos.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions,
              private todosService: TodosService) {
  }

  @Effect()
  loadTodos$ = this.actions$
    .ofType(todosActions.LOAD_TODOS)
    .pipe(
      switchMap(() => {
        return this.todosService.getTodos().pipe(
          map((todos: Todo[]) => new todosActions.LoadTodosSuccess(todos)),
          catchError(error => of(new todosActions.LoadTodosFail(error)))
        );
      })
    );
}
