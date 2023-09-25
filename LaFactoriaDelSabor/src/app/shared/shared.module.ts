import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './layoutComponents/navbar/navbar.component';
import { MatMenuModule} from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
import { TituloInformativoComponent } from './layoutComponents/titulo-informativo/titulo-informativo.component';

@NgModule({
  declarations: [
    NavbarComponent,
    TituloInformativoComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatMenuModule,
    TranslateModule
  ],
  exports: [
    NavbarComponent,
    TituloInformativoComponent
  ]
})
export class SharedModule { }
