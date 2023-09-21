import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasRoutingModule } from './reservas-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReservasHomeComponent } from './containers/reservas-home/reservas-home.component';
import { ReservasComponent } from './components/reservas/reservas.component';


@NgModule({
  declarations: [
    ReservasHomeComponent,
    ReservasComponent
  ],
  imports: [
    CommonModule,
    ReservasRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class ReservasModule { }
