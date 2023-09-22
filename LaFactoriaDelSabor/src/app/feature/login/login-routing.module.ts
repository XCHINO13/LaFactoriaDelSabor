import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LogInComponent } from './components/log-in/log-in.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  {
    path: "",
    component: LoginComponent,
    // children: [
    //   { path: "login", component: LogInComponent },
    // ],
  },
  // { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
