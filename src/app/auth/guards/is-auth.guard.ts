import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { environment } from "src/environment/environment";
import Swal from 'sweetalert2'
export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
    const router                = inject( Router );
    const jwt                   = localStorage.getItem('accessToken')
    const jwtExpires            =  localStorage.getItem('accessTokenExpires')
    const currentTimeInSeconds  = Math.floor(Date.now() / 1000);

    
    if ( jwtExpires === null ||( Number(jwtExpires) < currentTimeInSeconds)) {
        localStorage.clear()
        Swal.fire({
            title: "Session ",
            text: environment.sessionError,
            icon: "warning",
            timer: 3000,
            timerProgressBar: true,
            

          });
        router.navigateByUrl('/auth/login');
        return false;
    }
    
    if(!jwt){
        localStorage.clear()
        Swal.fire({
            title: "Session ",
            text: environment.sessionError,
            icon: "warning",
            timer: 3000,
            timerProgressBar: true,
            
        });
        router.navigateByUrl('/auth/login');
        return false;
    }
   return true;
    
  };