import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservasHomeComponent } from './containers/reservas-home/reservas-home.component';
import { FiltroReservaComponent } from './components/filtro-reserva/filtro-reserva.component';

const routes: Routes = [
  {
    path: "",
    component: ReservasHomeComponent,
    children: [
      { path: "", component: FiltroReservaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservasRoutingModule { }
