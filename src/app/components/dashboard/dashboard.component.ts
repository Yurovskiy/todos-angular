import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoService } from './../../services/todo.service';
import { IClient } from '../../interfaces/client';
import { ITodo } from './../../interfaces/todo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public clients: IClient[];
  public todos: ITodo[];

  constructor(
    public todoService: TodoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.clients = this.route.snapshot.data.clientList;
    this.todos = this.todoService.getTodos();
  }

  // private getClients(): void {
  //   this.clientService.getClients()
  //     .subscribe(clients => this.clients = clients.slice(1, 5));
  // }

}
