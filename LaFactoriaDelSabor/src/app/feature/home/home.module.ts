import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMenuComponent } from './containers/home-menu/home-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { CartaComponent } from './components/carta/carta.component';


@NgModule({
  declarations: [
    HomeMenuComponent,
    HeaderComponent,
    CartaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
