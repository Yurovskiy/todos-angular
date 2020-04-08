import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoService } from '../../services/todo.service';
import { ITodo } from './../../interfaces/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todos: ITodo[];

  public todo: ITodo = {
    title: '',
    description: '',
    completed: false,
  };

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  public onSubmit() {
    if (this.todo.title.trim().length !== 0 && this.todo.description.trim().length !== 0) {
      this.todoService.addTodo(this.todo);
      this.todo.title = '';
      this.todo.description = '';
    }
  }

  public deleteTodo(event, todo) {
    this.todoService.deleteTodo(todo);
  }

  public onChange(todo: ITodo): void {
    this.todoService.onToggle(todo);
  }

}
