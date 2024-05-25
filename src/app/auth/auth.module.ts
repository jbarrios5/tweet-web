import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


@NgModule({
  imports: [AuthRoutingModule,CommonModule,ReactiveFormsModule],
  declarations:[LoginComponent,RegisterComponent,LayoutComponent]
})
export class AuthModule { }
