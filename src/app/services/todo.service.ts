import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITodo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosCollection: AngularFirestoreCollection<ITodo>;
  private todos: Observable<ITodo[]>;
  private todoDoc: AngularFirestoreDocument<ITodo>;

  constructor(
    public afs: AngularFirestore,
  ) {
    this.todosCollection = this.afs.collection('todos', ref => ref.orderBy('title', 'asc'));
    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as ITodo;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  public getTodos() {
    return this.todos;
  }

  public addTodo(todo: ITodo) {
    this.todosCollection.add(todo);
  }

  public deleteTodo(todo: ITodo) {
    this.todoDoc = this.afs.doc(`todos/${todo.id}`);
    this.todoDoc.delete();
  }

  public onToggle(todo: ITodo) {
    this.todoDoc = this.afs.doc(`todos/${todo.id}`);
    todo.completed = !todo.completed;
    this.todoDoc.update(todo);
  }

}
