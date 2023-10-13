import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatosRoutingModule } from './platos-routing.module';
import { CrearPlatosHomeComponent } from './crear-platos/containers/crear-platos-home/crear-platos-home.component';


@NgModule({
  declarations: [
    CrearPlatosHomeComponent
  ],
  imports: [
    CommonModule,
    PlatosRoutingModule
  ]
})
export class PlatosModule { }
