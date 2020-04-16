import { Location } from '@angular/common';
import { ITodo } from './../../interfaces/todo';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  public todo: ITodo = {
    title: '',
    description: '',
    completed: false,
  };

  constructor(
    private todoService: TodoService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if (this.todo.title.trim().length !== 0 && this.todo.description.trim().length !== 0) {
      this.todoService.addTodo(this.todo);
      this.location.back();
    }
  }

}
