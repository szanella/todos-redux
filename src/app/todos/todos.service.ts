import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Todo } from './models/todo.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.apiUrl}/todos`).pipe(
      catchError((error: any) => Observable.throw(error.json()))
    );
  }
}
