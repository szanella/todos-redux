import * as fromTodos from './todos.reducer';
import * as fromActions from './todos.actions';
import { Todo } from '../models/todo.model';

describe('Todos Reducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromTodos;
      const action = {} as any;
      const state = fromTodos.reducer(undefined, action);
      expect(state).toBe(initialState);
    });
  });

  describe('LOAD_TODOS action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromTodos;
      const action = new fromActions.LoadTodos();
      const state = fromTodos.reducer(initialState, action);
      expect(state.entities).toEqual({});
      expect(state.loading).toEqual(true);
    });
  });

  describe('LOAD_TODOS_SUCCESS action', () => {
    it('should map an array to entities', () => {
      const payload: Todo[] = [
        { id: 1, description: 'Todo #1', complete: false},
        { id: 2, description: 'Todo #2', complete: true},
        { id: 3, description: 'Todo #3', complete: false}
      ];

      const entities = {
        1: payload[0],
        2: payload[1],
        3: payload[2]
      };
      const { initialState } = fromTodos;
      const action = new fromActions.LoadTodosSuccess(payload);
      const state = fromTodos.reducer(initialState, action);
      expect(state.entities).toEqual(entities);
      expect(state.loading).toEqual(false);
    });
  });

  describe('LOAD_TODOS_FAIL action', () => {
    it('should set loading to false', () => {
      const payload = { message: 'Error' };

      const { initialState } = fromTodos;
      const action = new fromActions.LoadTodosFail(payload);
      const state = fromTodos.reducer(initialState, action);
      expect(state.entities).toEqual({});
      expect(state.loading).toEqual(false);
    });
  });
});
