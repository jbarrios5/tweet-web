import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import Swal from 'sweetalert2'
import { environment } from 'src/environment/environment';
import { UserPostReq, UserPostReqData } from '../../interfaces/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router)
  private authService = inject(AuthService)
  public formControlRegister = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(8)]],
    userName: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    repeatPassword: ['', [Validators.required, Validators.minLength(6)]],
  })

  onRegister(): void {
    const { fullName, password,repeatPassword,email,userName } = this.formControlRegister.value;
    
    if(!userName || userName.trim().length <0){
      Swal.fire({
        title: "Campos requeridos ",
        text: 'Nombre de usuario  es obligatorio',
        icon: "warning",
      })
      return;
    }
    if(!fullName || fullName.trim().length <0){
      Swal.fire({
        title: "Campos requeridos ",
        text: 'Nombre completo es obligatorio',
        icon: "warning",
      })
      return;
    }
    if(!email || email.trim().length <0){
      Swal.fire({
        title: "Campos requeridos ",
        text: 'Email es obligatorio',
        icon: "warning",
      })
      return;
    }
    if(!password || password.trim().length <0){
      Swal.fire({
        title: "Campos requeridos ",
        text: 'Contraseña es obligatorio',
        icon: "warning",
      })
      return;
    }
    if(!repeatPassword || repeatPassword.trim().length <0){
      Swal.fire({
        title: "Campos requeridos ",
        text: 'Repetir contraseña es obligatorio',
        icon: "warning",
      })
      return;
    }

    if(repeatPassword !== password){
      Swal.fire({
        title: "Campos requeridos ",
        text: 'Las contraseña deben ser iguales',
        icon: "warning",
      })
      return;
    }

    const userPostReq:UserPostReq = {
      email:email,
      fullName:fullName,
      password:password,
      userName:userName
    }
    const userPostReqData:UserPostReqData = {
      data:userPostReq
    }

    
    this.authService.addUser(userPostReqData)
      .subscribe(
        (res) => {
          console.log(res);
          
          if(res.data.isUserInserted){
            Swal.fire({
              title: "Registro ",
              text: 'Usuario registrado exitosamente!',
              icon: "success",
            })
            this.router.navigateByUrl('/auth/login')
            return;
          }else{
            Swal.fire({
              title: "Registro ",
              text: 'No se pudo registrar el usuario',
              icon: "error",
            })
          }
         })
   } 
      
  
}
