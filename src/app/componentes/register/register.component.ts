import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  constructor(
    private servicioUsuario : UsuarioService,
    private router :Router,
    private fb:FormBuilder
  ) {}
   
    formReg = this.fb.group({
      email: [],
      password: [],
      rol: [2],
    });
   

  ngOnInit(): void {
  }

  onSubmit(){
    this.servicioUsuario.register(this.formReg.value)
    .then(response =>{
      console.log(response);
      this.servicioUsuario.createUsuario(this.formReg.value)
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error))
  
  }

}
