import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPlatosHomeComponent } from './crear-platos/containers/crear-platos-home/crear-platos-home.component';

const routes: Routes = [
  {
    path: '',   component: CrearPlatosHomeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatosRoutingModule { }
