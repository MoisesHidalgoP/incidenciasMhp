import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsuarioService } from '../../servicios/usuario.service';
import { IncidenciasService } from '../../servicios/incidencias.service';


@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {

  documentId?: any;
  incidencia: any;
  correo: any = this.UsuarioService.emailUsuario();
  usuarios: any[] = [];


  //Formulario reactivo
  usuarioForm = this.fb.group({
    email: [''],
    password:[''],
    rol: ['', Validators.required],
    
  });

  constructor(
    private UsuarioService: UsuarioService,
    private incidenciasService: IncidenciasService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private location:Location
  ) {}

  ngOnInit(): void {

    
    this.UsuarioService.getAll("usuarios").subscribe((resp) => {
      this.usuarios = [];
      resp.forEach( (users: any) => {
        console.log(users.payload.doc.id);
        this.usuarios.push(
          {...users.payload.doc.data()}
        )
      })
      this.rol();
    });
  }

  actualizarRol(){
    this.incidencia = this.usuarioForm.value;

    if (this.usuarioForm.valid) {
      
      this.UsuarioService.update("usuarios",this.documentId, this.incidencia).then(
        () => {
          alert("Usuario actualizado con exito");
        },
        (error: any) => {
          alert("Error");
          console.log(error);
        }
      );
  
    }else{
      alert("Asegurese de que el campo del rol no está vacío o que este se encuentre entre el rango de números indicado.");
    }
  }




  deleteUser(){
    this.UsuarioService.delete('usuarios', this.documentId).then(
      () => {
        alert("Usuario borrada con exito");
        this.goBack();
      },
      (error: any) => {
        alert("Error");
        console.log(error);
      }
    );
    
  }

  rol(){
    this.UsuarioService.usuarioLogueado(this.correo).subscribe(
      (resp: any) => {
        this.usuarios = [];

        resp.forEach((incidenciasSnapshot: any) => {
          this.usuarios.push(
            
              {...incidenciasSnapshot.payload.doc.data() }           
            
          )
        });
      })
  }
  

  goBack(): void {
    this.location.back();
  }
}
