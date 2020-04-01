import { Component, OnInit } from '@angular/core';

import { IClient } from '../../interfaces/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public clients: IClient[];

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.getClients();
  }

  private getClients(): void {
    this.clientService.getClients()
      .subscribe(clients => this.clients = clients);
  }

}
