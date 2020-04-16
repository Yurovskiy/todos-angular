import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientService } from './../../services/client.service';
import { Location } from '@angular/common';
import { delay } from 'rxjs/operators';

import { IClient } from '../../interfaces/client';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  public client: IClient = {
    firstName: '',
    lastName: '',
    nickName: '',
    email: '',
    phone: '',
    profession: ''
  };
  public editState = false;
  public showSpinner = true;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.clientService.getClientById(this.route.snapshot.params.id)
      .pipe(delay(500))
      .subscribe(() => this.showSpinner = false);

    this.clientService.getClientById(this.route.snapshot.params.id)
      .subscribe((data) => {
        this.client = data;
      });
  }

  public goBack(): void {
    this.location.back();
  }

  public editItem(): void {
    this.editState = true;
  }

  public updateClient(): void {
    if (
      this.client.firstName.trim().length !== 0 &&
      this.client.lastName.trim().length !== 0 &&
      this.client.nickName.trim().length !== 0 &&
      this.client.email.trim().length !== 0 &&
      this.client.phone.trim().length !== 0 &&
      this.client.profession.trim().length !== 0
    ) {
      this.clientService.updateClient(this.client);
      alert('Done!');
      this.goBack();
    }
  }

}
