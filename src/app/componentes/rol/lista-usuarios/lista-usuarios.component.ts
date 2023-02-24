import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../servicios/usuario.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  listaUsuarios: any[] = [];
  correo: any = this.usuarioService.emailUsuario();
  usuarios: any[] = [];
  
  constructor(private usuarioService: UsuarioService, private location: Location) { }

  ngOnInit(): void {
    this.getAll();
    this.rol();
  }

  getAll(){ 
    this.usuarioService.getAll("usuarios").subscribe((incidenciasSnapshot: any) => {
      incidenciasSnapshot.forEach((incidenciaData:any) => {

        this.listaUsuarios.push({
          id: incidenciaData.payload.doc.id, 
          data: incidenciaData.payload.doc.data()
        });
        
      });
    })
  }

  rol(){
    this.usuarioService.usuarioLogueado(this.correo).subscribe(
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
