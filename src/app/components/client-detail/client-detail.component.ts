import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { IClient } from '../../interfaces/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  public client: IClient;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  public getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.clientService.getClient(id)
      .subscribe(client => this.client = client);
  }

  public goBack(): void {
    this.location.back();
  }
}
