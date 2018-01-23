import { Component, Input, OnInit } from '@angular/core';
import { Todo }                     from '../models/todo.model';

@Component({
  selector: 'todos-column',
  templateUrl: './todos-column.component.html',
  styleUrls: ['./todos-column.component.scss']
})
export class TodosColumnComponent implements OnInit {
  @Input() title: string;
  @Input() todos: Todo[];

  constructor() { }

  ngOnInit() {
  }
}
