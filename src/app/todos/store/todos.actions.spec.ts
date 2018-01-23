import * as todosActions from './todos.actions';
import { Todo } from '../models/todo.model';

describe('Todos Actions', () => {
  describe('Load Todos Action', () => {
    it('should create an action', () => {
      const action = new todosActions.LoadTodos();

      expect(action.type).toEqual(todosActions.LOAD_TODOS);
    });
  });
  describe('Load Todos Success Action', () => {
    it('should create an action', () => {
      const payload: Todo[] = [
        {
          id: 1,
          description: 'Todo #1',
          complete: false
        },
        {
          id: 2,
          description: 'Todo #2',
          complete: true
        },
        {
          id: 3,
          description: 'Todo #3',
          complete: false
        }
      ];
      const action = new todosActions.LoadTodosSuccess(payload);

      expect(action.type).toEqual(todosActions.LOAD_TODOS_SUCCESS);
      expect(action.payload).toEqual(payload);
    });
  });
  describe('Load Todos Fail Action', () => {
    it('should create an action', () => {
      const payload = { message: 'Error' };
      const action = new todosActions.LoadTodosFail(payload);

      expect(action.type).toEqual(todosActions.LOAD_TODOS_FAIL);
      expect(action.payload).toEqual(payload);
    });
  });
});
