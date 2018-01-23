import { Actions }                 from '@ngrx/effects';
import { empty }                   from 'rxjs/observable/empty';
import { Observable }              from 'rxjs/Observable';
import { TodosService }            from '../todos.service';
import { TodosEffects }            from './todos.effects';
import { Todo }                    from '../models/todo.model';
import { TestBed }                 from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of }                      from 'rxjs/observable/of';
import * as fromActions            from './todos.actions';
import { cold, hot }               from 'jasmine-marbles';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('TodosEffects', () => {
  let actions$: TestActions;
  let service: TodosService;
  let effects: TodosEffects;

  const todos: Todo[] = [
    { id: 1, description: 'Todo #1', complete: false },
    { id: 2, description: 'Todo #2', complete: true },
    { id: 3, description: 'Todo #3', complete: false }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TodosService,
        TodosEffects,
        { provide: Actions, useFactory: getActions }
      ]
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(TodosService);
    effects = TestBed.get(TodosEffects);

    spyOn(service, 'getTodos').and.returnValue(of(todos));
  });

  describe('loadTodos$', () => {
    it('should return a collection from LoadTodosSuccess', () => {
      const action = new fromActions.LoadTodos();
      const completion = new fromActions.LoadTodosSuccess(todos);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.loadTodos$).toBeObservable(expected);
    });
  });
});
