import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMenuComponent } from './containers/home-menu/home-menu.component';
import { CartaComponent } from './components/carta/carta.component';


const routes: Routes = [
  // { path: '', component: HomeMenuComponent},
  // { path: 'login', component: },
  {
    path: "",
    component: HomeMenuComponent,
    children: [
      { path: "", component: CartaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
