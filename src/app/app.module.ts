// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Fire modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './../environments/environment';

// RoutingModule
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients-list/clients-list.component';
import { TodosComponent } from './components/todos/todos.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { ClientSearchComponent } from './components/client-search/client-search.component';

// Resolvers
import { ClientListResolver } from './resolvers/client-list.resolver';
import { ClientDetailResolver } from './resolvers/client-detail.resolver';
import { TodosListResolver } from './resolvers/todos-list.resolver';

// InMemoryWebApiModule
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    // InMemoryWebApi
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ClientListResolver, ClientDetailResolver, TodosListResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
