import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"", component:HomeViewComponent},
  {path:"users", component:UserViewComponent}, 
  {path:"login", component:LoginFormComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
