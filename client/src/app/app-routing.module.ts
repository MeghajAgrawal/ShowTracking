import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { AnimeComponent } from './anime/anime.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '',  pathMatch:'full',redirectTo:'/home' },
  { path: 'home', component: HomeComponent },
  { path: 'anime', component: AnimeComponent},
  { path: 'account', component: AccountComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
