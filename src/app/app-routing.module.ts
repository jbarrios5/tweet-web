import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
  {
    path:'dashboard',
    loadChildren: ()=> import('./dashboard/dashobard.module').then(m => m.DashboardModule),
  },
  {
    path:'tweet',
    loadChildren: ()=> import('./tweet/tweet.module').then(m => m.TweetModule),
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
