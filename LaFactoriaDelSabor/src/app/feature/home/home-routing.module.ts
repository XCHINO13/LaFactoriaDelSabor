import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMenuComponent } from './containers/home-menu/home-menu.component';


const routes: Routes = [
  { path: '', component: HomeMenuComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
