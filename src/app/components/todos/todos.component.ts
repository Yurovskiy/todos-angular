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
    // console.log('111');
    // this.todos = this.route.snapshot.data.todosList;

    // this.route.data.subscribe((data: { todos: ITodo[] }) => {
    //   this.todos = data.todos;
    // });

    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  onSubmit() {
    if (this.todo.title !== '' && this.todo.description !== '') {
      this.todoService.addTodo(this.todo);
      this.todo.title = '';
      this.todo.description = '';
    }
  }

  deleteTodo(event, todo) {
    this.todoService.deleteTodo(todo);
  }

  // public addTodo(): void {
  //   if (this.todoTitle.trim().length === 0) {
  //     return;
  //   }
  //   const todo: ITodo = {
  //     id: this.todoService.genId(this.todoService.todos),
  //     title: this.todoTitle,
  //     completed: false,
  //     date: new Date()
  //   };
  //   this.todoService.addTodo(todo);
  //   this.todoTitle = '';
  // }

  // public removeTodo(id: number): void {
  //   this.todoService.removeTodo(id);
  // }

  public onChange(todo: ITodo): void {
    this.todoService.onToggle(todo);
  }

}
