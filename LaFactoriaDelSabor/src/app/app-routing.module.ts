import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMenuComponent } from './feature/home/containers/home-menu/home-menu.component';
import { HomeModule } from './feature/home/home.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  // {
  //   path: '', loadChildren: () =>
  //     import('./feature/home/home.module').then(mod => mod.HomeModule)
  // },
  {
    path: 'home', loadChildren: () =>
      import('./feature/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'login', loadChildren: () =>
      import('./feature/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'register', loadChildren: () =>
      import('./feature/register/register.module').then(mod => mod.RegisterModule)
  },
  {
    path: 'reservas', loadChildren: () =>
      import('./feature/reservas/reservas.module').then(mod => mod.ReservasModule)
  },
  {
    path: 'platos', loadChildren: () =>
      import('./feature/platos/platos.module').then(mod => mod.PlatosModule)
  },
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
