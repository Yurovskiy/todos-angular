import { Injectable } from '@angular/core';

import { ITodo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: ITodo[] = [];

  constructor() {
    const dateNow = new Date();
    this.todos = [
      { id: 0, title: 'Wash hands', completed: true, date: dateNow },
      { id: 1, title: 'Make coffee', completed: false, date: dateNow },
      { id: 2, title: 'Go smoke', completed: false, date: dateNow },
      { id: 3, title: 'Take notebook', completed: false, date: dateNow },
      { id: 4, title: 'Complete todo-app', completed: false, date: dateNow },
    ];
  }

  public getTodos(): ITodo[] {
    return this.todos;
  }

  public addTodo(todo: ITodo) {
    this.todos.push(todo);
  }

  public removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  public genId(todos: ITodo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 0;
  }

  public onToggle(id: number) {
    const idx = this.todos.findIndex(todo => todo.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }

}
