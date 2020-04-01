import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ClientService } from '../services/client.service';
import { IClient } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientListResolver implements Resolve<IClient[]> {

  constructor(
    private clientService: ClientService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IClient[]> {
    return this.clientService.getClients();
  }

}
