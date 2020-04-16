import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../services/todo.service';
import { ITodo } from './../../interfaces/todo';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todos: ITodo[];

  public showSpinner = true;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoService.getTodos().pipe(delay(500))
      .subscribe(() => this.showSpinner = false);

    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  public deleteTodo(todo) {
    this.todoService.deleteTodo(todo);
  }

  public onChange(todo: ITodo): void {
    this.todoService.onToggle(todo);
  }

}
