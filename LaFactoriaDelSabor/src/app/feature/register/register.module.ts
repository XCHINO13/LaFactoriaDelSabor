import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterHomeComponent } from './containers/containers/register-home/register-home.component';
import { FiltroRegisterComponent } from './components/filtro-register/filtro-register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterHomeComponent,
    FiltroRegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule, ReactiveFormsModule,
    FormsModule
  ]
})
export class RegisterModule { }
