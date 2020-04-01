import { Component, OnInit, Input } from '@angular/core';

import { IClient } from '../../interfaces/client';
import { ClientService } from '../../services/client.service';
import { ITodo } from './../../interfaces/todo';
import { TodoService } from './../../services/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() clients: IClient[] = [];
  @Input() todos: ITodo[] = [];

  constructor(
    private clientService: ClientService,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.getClients();
    this.getTodos();
  }

  private getClients(): void {
    this.clientService.getClients()
      .subscribe(clients => this.clients = clients.slice(1, 5));
  }

  private getTodos(): void {
    this.todoService.getTodos();
  }

}
