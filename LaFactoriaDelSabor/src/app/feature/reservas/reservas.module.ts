import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasRoutingModule } from './reservas-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReservasHomeComponent } from './containers/reservas-home/reservas-home.component';
import { FiltroReservaComponent } from './components/filtro-reserva/filtro-reserva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReservasHomeComponent,
    FiltroReservaComponent
  ],
  imports: [
    CommonModule,
    ReservasRoutingModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReservasModule { }
