import { Store, StoreModule } from '@ngrx/store';
import { Todo }               from '../models/todo.model';
import { TestBed }            from '@angular/core/testing';

import * as fromReducer      from './todos.reducer';
import * as fromRootReducers from '../../store/router.reducer';
import * as fromSelectors    from './todos.selectors';
import * as fromActions      from './todos.actions';

describe('Todos Selectors', () => {
  let store: Store<fromReducer.TodosState>;

  const todos: Todo[] = [
    { id: 1, description: 'Todo #1', complete: false },
    { id: 2, description: 'Todo #2', complete: true },
    { id: 3, description: 'Todo #3', complete: false }
  ];

  const entities = {
    1: todos[0],
    2: todos[1],
    3: todos[2]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRootReducers.reducers,
          todos: fromReducer.reducer
        })
      ]
    });

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('getTodosEntities', () => {
    it('should return todos as entities', () => {
      let result;

      store
        .select(fromSelectors.getTodosEntities)
        .subscribe(value => {
          result = value;
        });

      expect(result).toEqual({});

      store.dispatch(new fromActions.LoadTodosSuccess(todos));

      expect(result).toEqual(entities);
    });
  });

  describe('getTodosLoading', () => {
    it('should return the loading boolean', () => {
      let result;

      store
        .select(fromSelectors.getTodosLoading)
        .subscribe(value => {
          result = value;
        });

      expect(result).toEqual(false);

      store.dispatch(new fromActions.LoadTodos());

      expect(result).toEqual(true);
    });
  });

  describe('getAllTodos', () => {
    it('should return todos as an array', () => {
      let result;

      store
        .select(fromSelectors.getAllTodos)
        .subscribe(value => {
          result = value;
        });

      expect(result).toEqual([]);

      store.dispatch(new fromActions.LoadTodosSuccess(todos));

      expect(result).toEqual(todos);
    });
  });

  describe('getCompleteTodos', () => {
    it('should return complete todos as an array', () => {
      let result;

      store
        .select(fromSelectors.getCompleteTodos)
        .subscribe(value => {
          result = value;
        });

      expect(result).toEqual([]);

      store.dispatch(new fromActions.LoadTodosSuccess(todos));

      expect(result).toEqual([todos[1]]);
    });
  });

  describe('getIncompleteTodos', () => {
    it('should return incomplete todos as an array', () => {
      let result;

      store
        .select(fromSelectors.getIncompleteTodos)
        .subscribe(value => {
          result = value;
        });

      expect(result).toEqual([]);

      store.dispatch(new fromActions.LoadTodosSuccess(todos));

      expect(result).toEqual([todos[0], todos[2]]);
    });
  });
});
