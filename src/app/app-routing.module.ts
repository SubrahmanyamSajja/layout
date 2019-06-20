import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { LoginComponent } from './layouts/auth/login/login.component';
import { ForgotComponent } from './layouts/auth/forgot/forgot.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'',
    component:AuthLayoutComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'forgot-password',
        component:ForgotComponent,
      }
    ]
  },
  {
    path:'',
    component:AdminLayoutComponent,
    children:[
      {
        path:'',
        loadChildren:'./pages/pages.module#PagesModule',
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
