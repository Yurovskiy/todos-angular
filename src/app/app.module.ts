import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients-list/clients-list.component';
import { TodosComponent } from './components/todos/todos.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { ClientSearchComponent } from './components/client-search/client-search.component';

import { ClientListResolver } from './resolvers/client-list.resolver';
import { ClientDetailResolver } from './resolvers/client-detail.resolver';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    TodosComponent,
    ClientDetailComponent,
    ClientSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ClientListResolver, ClientDetailResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
