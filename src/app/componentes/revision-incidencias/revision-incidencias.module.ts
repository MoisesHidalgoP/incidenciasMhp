import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionIncidenciasRoutingModule } from './revision-incidencias-routing.module';
import { RevisionIncidenciasComponent } from './revision-incidencias.component';
import { DetalleRevisionIncidenciasComponent } from './detalle-revision-incidencias/detalle-revision-incidencias.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RevisionIncidenciasComponent,
    DetalleRevisionIncidenciasComponent
  ],
  imports: [
    CommonModule,
    RevisionIncidenciasRoutingModule,
    MatButtonToggleModule,
    ReactiveFormsModule
  ]
})
export class RevisionIncidenciasModule { }
