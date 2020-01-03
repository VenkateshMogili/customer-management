import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';
import { CardviewComponent } from './cardview/cardview.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ListviewComponent } from './listview/listview.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'customers',
    component: CustomersComponent
  },
  {
    path:'cardView',
    component: CardviewComponent
  },
  {
    path:'listView',
    component: ListviewComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'editCustomer/:id',
    component: EdituserComponent
  },
  {
    path:'addCustomer',
    component: AdduserComponent
  },
  {
    path:'**',
    redirectTo: 'login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
