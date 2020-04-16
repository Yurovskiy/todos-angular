import { Component, OnInit } from '@angular/core';
import { ClientService } from './../../services/client.service';
import { Router } from '@angular/router';

import { IClient } from './../../interfaces/client';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit {

  public client: IClient = {
    firstName: '',
    lastName: '',
    nickName: '',
    email: '',
    phone: '',
    profession: ''
  };

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if (
      this.client.firstName.trim().length !== 0 &&
      this.client.lastName.trim().length !== 0 &&
      this.client.nickName.trim().length !== 0 &&
      this.client.email.trim().length !== 0 &&
      this.client.phone.trim().length !== 0 &&
      this.client.profession.trim().length !== 0
    ) {
      this.clientService.addClient(this.client);
      this.router.navigateByUrl('/dashboard/clients');
    }
  }

}
