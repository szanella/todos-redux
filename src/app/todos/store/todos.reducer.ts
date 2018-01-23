import { Todo } from '../models/todo.model';

import * as todosActions from './todos.actions';

import { arrayToEntities } from '../../core/helpers';
import { createFeatureSelector } from '@ngrx/store';

export interface TodosState {
  entities: { [id: number]: Todo };
  loading: boolean;
}

export const initialState: TodosState = {
  entities: {},
  loading: false
};

export function reducer(
  state = initialState,
  action: todosActions.TodosAction
): TodosState {
  switch (action.type) {
    case todosActions.LOAD_TODOS: {
      return {
        ...state,
        entities: {},
        loading: true
      };
    }

    case todosActions.LOAD_TODOS_SUCCESS: {
      const todos = action.payload;
      const entities = arrayToEntities(todos);

      return {
        ...state,
        entities,
        loading: false
      };
    }

    case todosActions.LOAD_TODOS_FAIL: {
      return {
        ...state,
        loading: false
      };
    }
  }

  return state;
}

export const getTodosEntities = (state: TodosState) => state.entities;
export const getTodosLoading = (state: TodosState) => state.loading;

export const getTodosState = createFeatureSelector<TodosState>('todos');
