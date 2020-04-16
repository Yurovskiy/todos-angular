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
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients-list/clients-list.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { ClientSearchComponent } from './components/client-search/client-search.component';
import { ClientAddComponent } from './components/client-add/client-add.component';
import { TodosComponent } from './components/todos/todos.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ClientsComponent,
    TodosComponent,
    ClientDetailComponent,
    ClientSearchComponent,
    ClientAddComponent,
    SidebarComponent,
    AudioPlayerComponent,
    LoadingSpinnerComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
