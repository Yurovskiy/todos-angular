import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITodo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosCollection: AngularFirestoreCollection<ITodo>;
  todos: Observable<ITodo[]>;
  todoDoc: AngularFirestoreDocument<ITodo>;

  constructor(
    public afs: AngularFirestore,
  ) {
    // this.todos = this.afs.collection('todos').valueChanges();
    this.todosCollection = this.afs.collection('todos', ref => ref.orderBy('title', 'asc'));
    // this.todos = this.todosCollection.snapshotChanges().pipe(
    //   map(changes => {
    //     return changes.map(a => {
    //       const data = a.payload.doc.data() as ITodo;
    //       data.id = a.payload.doc.id;
    //       return data;
    //     });
    //   })
    // );
  }

  public getTodos(): Observable<ITodo[]> {
    return this.todosCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as ITodo;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  addTodo(todo: ITodo) {
    this.todosCollection.add(todo);
  }

  deleteTodo(todo: ITodo) {
    this.todoDoc = this.afs.doc(`todos/${todo.id}`);
    this.todoDoc.delete();
  }

  onToggle(todo: ITodo) {
    this.todoDoc = this.afs.doc(`todos/${todo.id}`);
    console.log(todo);
  }

  // public addTodo(todo: ITodo) {
  //   this.todos.push(todo);
  // }

  // public removeTodo(id: number) {
  //   this.todos = this.todos.filter(t => t.id !== id);
  // }

  // public genId(todos: ITodo[]): number {
  //   return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 0;
  // }

  // public onToggle(id: number) {
  //   const idx = this.todos.findIndex(todo => todo.id === id);
  //   this.todos[idx].completed = !this.todos[idx].completed;
  // }

}
