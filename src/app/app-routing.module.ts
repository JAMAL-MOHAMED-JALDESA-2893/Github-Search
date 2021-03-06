import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { 
    path: '',
     component: ProfileComponent
   },

  {
     path: 'about',
      component: LandingComponent
   },
  {
     path: '**',
      component: NotFoundComponent
   },

  { path: '', redirectTo: "/profile", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
