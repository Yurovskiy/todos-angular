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

  public getClient(id: number): Observable<IClient> {
    const url = `${this.clientsUrl}/${id}`;
    return this.http.get<IClient>(url);
  }

  public searchClient(term: string): Observable<IClient[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<IClient[]>(`${this.clientsUrl}/?name=${term}`);
  }
}
