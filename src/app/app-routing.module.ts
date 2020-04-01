import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientListResolver } from './resolvers/client-list.resolver';
import { ClientDetailResolver } from './resolvers/client-detail.resolver';

import { TodosComponent } from './components/todos/todos.component';
import { ClientsComponent } from './components/clients-list/clients-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: { clientList: ClientListResolver }
  },
  {
    path: 'clients',
    component: ClientsComponent,
    resolve: { clientList: ClientListResolver }
  },
  {
    path: 'detail/:id',
    component: ClientDetailComponent,
    resolve: { clientDetail: ClientDetailResolver }
  },
  { path: 'todos', component: TodosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
