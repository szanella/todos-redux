import { createSelector }  from '@ngrx/store';
import * as fromReducers   from './todos.reducer';
import { entitiesToArray } from '../../core/helpers';
import { Todo }            from '../models/todo.model';

export const getTodosEntities = createSelector(
  fromReducers.getTodosState,
  fromReducers.getTodosEntities
);

export const getTodosLoading = createSelector(
  fromReducers.getTodosState,
  fromReducers.getTodosLoading
);

export const getAllTodos = createSelector(
  getTodosEntities,
  entities => entitiesToArray(entities)
);

export const getCompleteTodos = createSelector(
  getAllTodos,
  (todos: Todo[]) => todos.filter((todo: Todo) => todo.complete)
);

export const getIncompleteTodos = createSelector(
  getAllTodos,
  (todos: Todo[]) => todos.filter((todo: Todo) => !todo.complete)
);
