import { Component, OnInit } from '@angular/core';

import { IClient } from '../../interfaces/client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsComponent implements OnInit {

  public clients: IClient[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.clients = this.route.snapshot.data.clientList;
  }

}
