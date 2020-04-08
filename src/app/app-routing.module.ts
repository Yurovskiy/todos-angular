import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { ClientListResolver } from './resolvers/client-list.resolver';
import { ClientDetailResolver } from './resolvers/client-detail.resolver';
import { TodosListResolver } from './resolvers/todos-list.resolver';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients-list/clients-list.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { TodosComponent } from './components/todos/todos.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    resolve: { clientList: ClientListResolver },
  },
  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [AuthGuard],
    resolve: { clientList: ClientListResolver }
  },
  {
    path: 'detail/:id',
    component: ClientDetailComponent,
    canActivate: [AuthGuard],
    resolve: { clientDetail: ClientDetailResolver }
  },
  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [AuthGuard],
    // resolve: { todosList: TodosListResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
