import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMenuComponent } from './containers/home-menu/home-menu.component';
import { CartaComponent } from './components/carta/carta.component';
// import { ThreejsComponent } from './components/threejs/threejs.component';
import { LoginComponent } from '../login/containers/login/login.component';
import { LoginModule } from '../login/login.module';


const routes: Routes = [
  // { path: '', component: HomeMenuComponent},
  // { path: 'login', component: LoginComponent},
  {
    path: "",
    // component: ThreejsComponent,
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
