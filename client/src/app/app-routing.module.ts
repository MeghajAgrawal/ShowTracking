import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { AnimeComponent } from './anime/anime.component';

const routes: Routes = [
  { path: '',  pathMatch:'full',redirectTo:'/home' },
  { path: 'home', component: HomeComponent },
  { path: 'anime', component: AnimeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
