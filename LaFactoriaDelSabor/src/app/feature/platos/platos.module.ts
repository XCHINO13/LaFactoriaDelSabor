import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatosRoutingModule } from './platos-routing.module';
import { CrearPlatosHomeComponent } from './crear-platos/containers/crear-platos-home/crear-platos-home.component';
import { FiltroPlatosComponent } from './crear-platos/components/filtro-platos/filtro-platos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearPlatosHomeComponent,
    FiltroPlatosComponent
  ],
  imports: [
    CommonModule,
    PlatosRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlatosModule { }
