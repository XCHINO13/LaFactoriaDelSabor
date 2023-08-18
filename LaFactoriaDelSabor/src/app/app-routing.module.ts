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
  // { path: '**', component: HomeMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
