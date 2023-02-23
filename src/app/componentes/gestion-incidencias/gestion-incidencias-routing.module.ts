import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionIncidenciasComponent } from './gestion-incidencias.component';
import { DetalleIncidenciaComponent } from './detalle-incidencia/detalle-incidencia.component';

const routes: Routes = [{ path: '', component: GestionIncidenciasComponent },
{path: 'gestionIncidencias/:id', component: DetalleIncidenciaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionIncidenciasRoutingModule { }
