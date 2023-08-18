import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardLoginComponent } from './components/card-login/card-login.component';


@NgModule({
  declarations: [
    LoginComponent,
    CardLoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
