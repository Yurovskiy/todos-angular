import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { IClient } from '../../interfaces/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.scss']
})
export class ClientSearchComponent implements OnInit {

  public  clients$: Observable<IClient[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private clientService: ClientService
  ) { }

  public search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.clients$ = this.searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => this.clientService.searchClient(term)),
    );
  }

}
