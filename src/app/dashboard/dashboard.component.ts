import { Component, OnInit } from '@angular/core';

import { Client } from '../interfaces/client';
import { ClientService } from './../services/client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  clients: Client[] = [];

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients()
      .subscribe(clients => this.clients = clients.slice(1, 5));
  }

}
