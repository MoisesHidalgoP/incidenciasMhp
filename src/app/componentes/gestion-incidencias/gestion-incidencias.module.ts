import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionIncidenciasRoutingModule } from './gestion-incidencias-routing.module';
import { GestionIncidenciasComponent } from './gestion-incidencias.component';
import { DetalleIncidenciaComponent } from './detalle-incidencia/detalle-incidencia.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionIncidenciasComponent,
    DetalleIncidenciaComponent
  ],
  imports: [
    CommonModule,
    GestionIncidenciasRoutingModule,
    ReactiveFormsModule
  ]
})
export class GestionIncidenciasModule { }
