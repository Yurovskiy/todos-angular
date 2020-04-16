import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IClient } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clientsCollection: AngularFirestoreCollection<IClient>;
  private clients: Observable<IClient[]>;
  private clientDoc: AngularFirestoreDocument<IClient>;

  public client: Observable<IClient>;

  constructor(
    public afs: AngularFirestore
  ) {
    // this.clients = this.afs.collection('clients', ref => ref.orderBy('firstName', 'asc')).valueChanges();
    this.clientsCollection = this.afs.collection('clients', ref => ref.orderBy('firstName', 'asc'));
    this.clients = this.clientsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as IClient;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  public getClients(): Observable<IClient[]> {
    return this.clients;
  }

  public getClientById(id: string): Observable<IClient> {
    return this.getClients().pipe(
      map((clients: IClient[]) => clients.find(client => client.id === id))
    );
  }

  public addClient(client: IClient): void {
    this.clientsCollection.add(client);
  }

  public deleteClient(client: IClient): Observable<IClient[]> {
    this.clientDoc = this.afs.doc(`clients/${client.id}`);
    const deletedClient = confirm('Are you sure you want to delete this client?');
    if (deletedClient) {
      this.clientDoc.delete();
    } else {
      return this.clients;
    }
  }

  public updateClient(client: IClient): Observable<IClient> {
    this.clientDoc = this.afs.doc(`clients/${client.id}`);
    this.clientDoc.update(client);
    return this.client;
  }

  // public searchClient(term: string): Observable<IClient[]> {
  //   if (!term.trim()) {
  //     return of([]);
  //   }
  //   return this.http.get<IClient[]>(`${this.clientsUrl}/?name=${term}`);
  // }
}
