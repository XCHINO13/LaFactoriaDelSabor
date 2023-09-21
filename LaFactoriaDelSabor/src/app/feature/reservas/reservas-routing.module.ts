import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservasHomeComponent } from './containers/reservas-home/reservas-home.component';
import { ReservasComponent } from './components/reservas/reservas.component';

const routes: Routes = [
  {
    path: "",
    component: ReservasHomeComponent,
    children: [
      { path: "", component: ReservasComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservasRoutingModule { }
