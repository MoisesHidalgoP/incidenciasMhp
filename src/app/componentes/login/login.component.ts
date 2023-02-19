import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLog : FormGroup;

  constructor(
    private usuarioServicio : UsuarioService,
    private router : Router
  ) {
    this.formLog = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formLog.value);
    this.usuarioServicio.login(this.formLog.value)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  onClick(){
    this.usuarioServicio.loginGoogle()
    .then(response =>{
      console.log(response);
      this.router.navigate(['/main']);
    })
    .catch(error => console.log(error))
  }

}
