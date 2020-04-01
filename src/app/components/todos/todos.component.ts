import { Component, OnInit } from '@angular/core';

import { ITodo } from './../../interfaces/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todoTitle: '';

  constructor(
    public todoService: TodoService
  ) { }

  ngOnInit(): void {}

  public addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }
    const todo: ITodo = {
      id: this.todoService.genId(this.todoService.todos),
      title: this.todoTitle,
      completed: false,
      date: new Date()
    };
    this.todoService.addTodo(todo);
    this.todoTitle = '';
  }

  public removeTodo(id: number): void {
    this.todoService.removeTodo(id);
  }

  public onChange(id: number): void {
    this.todoService.onToggle(id);
  }

}
