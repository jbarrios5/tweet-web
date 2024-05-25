import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthPostReqData } from '../../interfaces/auth-post-req-data.interface';
import { AuthPostReq } from '../../interfaces/auth-post-req.interface';
import { AuthService } from '../../service/auth.service';
import Swal from 'sweetalert2'
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router)
  private authService = inject(AuthService)
  public formControlLogin = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(8)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  onLogin(): void {
    const { userName, password } = this.formControlLogin.value;
    let auth: AuthPostReq = {
      userName: userName!,
      password: password!
    };

    let authData: AuthPostReqData = {
      data: auth
    };

    this.authService.onLogin(authData)
      .subscribe({
        next: (res) => this.router.navigateByUrl('/dashboard'),
        error(err) {
          if(err.statusCode == 401){
            Swal.fire({
              title: "Acceso ",
              text: environment.authError,
              icon: "warning",
            })
          }else{
            Swal.fire({
              title: "Acceso ",
              text: environment.genericError,
              icon: "warning",
            })
          }
        
        },
      })
  }
  onRegister():void{
    console.log('click');
    
    this.router.navigateByUrl('auth/register/')
  }
}
