import { Component, OnInit } from '@angular/core';

import { Todo } from './../../interfaces/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todoTitle: '';

  constructor(
    public todoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  addTodo(): void {
    const todo: Todo = {
      id: this.todoService.genId(this.todoService.todos),
      title: this.todoTitle,
      completed: false,
      date: new Date()
    };
    this.todoService.addTodo(todo);
    this.todoTitle = '';
  }

  removeTodo(id: number): void {
    this.todoService.removeTodo(id);
  }

  onChange(id: number): void {
    this.todoService.onToggle(id);
  }

}
