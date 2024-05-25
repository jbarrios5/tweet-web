import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthPostReqData } from '../../interfaces/auth-post-req-data.interface';
import { AuthPostReq } from '../../interfaces/auth-post-req.interface';
import { AuthService } from '../../service/auth.service';
import Swal from 'sweetalert2'
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  

  
}
