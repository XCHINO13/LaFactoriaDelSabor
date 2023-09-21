import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMenuComponent } from './feature/home/containers/home-menu/home-menu.component';
import { HomeModule } from './feature/home/home.module';

const routes: Routes = [
  // { path: '', component: HomeMenuComponent},
  {
    path: '', loadChildren: () =>
      import('./feature/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'home', loadChildren: () =>
      import('./feature/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'login', loadChildren: () =>
      import('./feature/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'reservas', loadChildren: () =>
      import('./feature/reservas/reservas.module').then(mod => mod.ReservasModule)
  },
  // { path: '**', component: HomeMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
