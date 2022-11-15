import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {UsuariosService} from '../../services/usuarios.service';
import {loginI} from '../../modelos/login.interface';
import {ResponseI} from '../../modelos/response.interface'; 
 import { ToastrService } from 'ngx-toastr';
import { duration } from 'moment';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logo = './assets/img/user.png'
  form : FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, 
    private _snackBar: MatSnackBar,
    private router: Router) {

    this.form =this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
  
  }



  ingresar(){  
    const usuario = this.form.value.username;
    const password = this.form.value.password;
    //console.log(usuario);
    

    if(usuario =='apacheco' && password == '12345678'){
      this.carga();
    }
      else{
        this.error();
        this.form.reset();
      }
  }
    

    error(){
      this._snackBar.open('Usuario o contraseña incorrectos', '', {
        duration: 5000, 
        horizontalPosition: 'center',
        verticalPosition:'bottom'
      })
     }
   
    carga(){
      this.loading = true;
      setTimeout(() => {
        this.router.navigate(['dashboard']);
      }, 1500);
    }
    //this.api.login(this.form.value).subscribe(data =>{
      
      //let dataResponse:any = data;
      //if(dataResponse.token != ""){
      //  localStorage.setItem("token",dataResponse.token);
      //  this.router.navigate(['dashboard']);
      //  console.log("si paso");
       
      //}
    //})
  
  }

 /* onLogout(){

    
  }
//}*/
