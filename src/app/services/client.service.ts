import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { IClient } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clientsUrl = 'api/clients';

  constructor(
    private http: HttpClient
  ) { }

  public getClients(): Observable<IClient[]> {
    return this.http.get<IClient[]>(this.clientsUrl);
  }

  public getClientById(id: string): Observable<IClient> {
    return this.http.get<IClient>(`${this.clientsUrl}/${id}`);
  }

  public searchClient(term: string): Observable<IClient[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<IClient[]>(`${this.clientsUrl}/?name=${term}`);
  }
}
