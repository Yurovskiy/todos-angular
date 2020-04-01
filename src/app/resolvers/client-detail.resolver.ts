import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ClientService } from '../services/client.service';
import { IClient } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientDetailResolver implements Resolve<IClient> {

  constructor(
    private clientService: ClientService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IClient> {
    return this.clientService.getClientById(route.paramMap.get('id'));
  }

}
