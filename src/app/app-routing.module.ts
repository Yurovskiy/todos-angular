import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients-list/clients-list.component';
import { ClientAddComponent } from './components/client-add/client-add.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/clients',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'clients',
        component: ClientsComponent,
        children: [
          { path: 'add-client', component: ClientAddComponent }
        ]
      },
      {
        path: 'clients/:id',
        component: ClientDetailComponent
      },
      {
        path: 'todos',
        component: TodosComponent,
        children: [
          { path: 'add-todo', component: TodoAddComponent }
        ]
      },
      {
        path: 'audio-player',
        component: AudioPlayerComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
