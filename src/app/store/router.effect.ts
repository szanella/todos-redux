import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import * as RouterActions from './router.action';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class RouterEffect {
  constructor(private actions$: Actions,
              private router: Router,
              private location: Location) {
  }

  @Effect({dispatch: false})
  navigate$ = this.actions$
    .ofType(RouterActions.GO)
    .pipe(
      map((action: RouterActions.Go) => action.payload),
      tap(({path, query: queryParams, extras}) => {
        this.router.navigate(path, {queryParams, ...extras});
      })
    );
}
