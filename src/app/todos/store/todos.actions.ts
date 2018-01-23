import { Action } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export const LOAD_TODOS = '[Todos] Load Todos';
export const LOAD_TODOS_SUCCESS = '[Todos] Load Todos Success';
export const LOAD_TODOS_FAIL = '[Todos] Load Todos Fail';

export class LoadTodos implements Action {
  readonly type = LOAD_TODOS;
}

export class LoadTodosSuccess implements Action {
  readonly type = LOAD_TODOS_SUCCESS;
  constructor(public payload: Todo[]) {}
}

export class LoadTodosFail implements Action {
  readonly type = LOAD_TODOS_FAIL;
  constructor(public payload: any) {}
}

export type TodosAction =
  LoadTodos
  | LoadTodosSuccess
  | LoadTodosFail;
