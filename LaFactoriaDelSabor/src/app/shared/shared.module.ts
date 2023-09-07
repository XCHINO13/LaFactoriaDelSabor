import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './layoutComponents/navbar/navbar.component';
import { MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatMenuModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
