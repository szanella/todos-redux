import { createSelector } from '@ngrx/store';
import * as fromReducers from './todos.reducer';
import { entitiesToArray } from '../../core/helpers';

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
