import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolRoutingModule } from './rol-routing.module';
import { RolComponent } from './rol.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';


@NgModule({
  declarations: [
    RolComponent,
    ListaUsuariosComponent
  ],
  imports: [
    CommonModule,
    RolRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RolModule { }
