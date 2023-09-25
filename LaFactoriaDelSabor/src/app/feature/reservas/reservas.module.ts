import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasRoutingModule } from './reservas-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReservasHomeComponent } from './containers/reservas-home/reservas-home.component';
import { FiltroReservaComponent } from './components/filtro-reserva/filtro-reserva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaReservasComponent } from './components/tabla-reservas/tabla-reservas.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ReservasHomeComponent,
    FiltroReservaComponent,
    TablaReservasComponent
  ],
  imports: [
    CommonModule,
    ReservasRoutingModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ]
})
export class ReservasModule { }
