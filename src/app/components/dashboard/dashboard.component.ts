import { Component, OnInit, Input } from '@angular/core';

import { Client } from '../../interfaces/client';
import { ClientService } from '../../services/client.service';
import { Todo } from './../../interfaces/todo';
import { TodoService } from './../../services/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() clients: Client[] = [];
  @Input() todos: Todo[] = [];

  constructor(
    private clientService: ClientService,
    public todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.getClients();
    this.getTodos();
  }

  getClients(): void {
    this.clientService.getClients()
      .subscribe(clients => this.clients = clients.slice(1, 5));
  }

  getTodos(): void {
    this.todoService.getTodos();
  }

}
