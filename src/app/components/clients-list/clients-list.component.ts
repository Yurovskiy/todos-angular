import { Component, OnInit } from '@angular/core';
import { ClientService } from './../../services/client.service';

import { IClient } from '../../interfaces/client';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-clients',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsComponent implements OnInit {

  public clients: IClient[];

  public showSpinner = true;

  constructor(
    private clientService: ClientService,
  ) { }

  ngOnInit(): void {
    this.clientService.getClients()
      .pipe(delay(500))
      .subscribe(() => this.showSpinner = false);

    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
    });
  }

  public deleteClient(client: IClient): void {
    this.clientService.deleteClient(client);
  }

}
