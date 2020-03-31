import { Injectable } from '@angular/core';

import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];

  constructor() {
    this.todos = [
      { id: 0, title: 'Wash hands', completed: true, date: new Date() },
      { id: 1, title: 'Make coffee', completed: false, date: new Date() },
      { id: 2, title: 'Go smoke', completed: false, date: new Date() },
      { id: 3, title: 'Take notebook', completed: false, date: new Date() },
      { id: 4, title: 'Complete todo-app', completed: false, date: new Date() },
    ];
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 0;
  }

  onToggle(id: number) {
    const idx = this.todos.findIndex(todo => todo.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }

}
