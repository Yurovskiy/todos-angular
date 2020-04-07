import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { TodoService } from './../services/todo.service';
import { ITodo } from './../interfaces/todo';

@Injectable({
    providedIn: 'root'
})
export class TodosListResolver implements Resolve<ITodo[]> {

    constructor(
        private todoService: TodoService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITodo[]> {
        return this.todoService.getTodos();
    }

}
