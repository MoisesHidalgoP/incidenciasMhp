import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { RolComponent } from './rol.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

const routes: Routes = [{ path: '', component: ListaUsuariosComponent , /*...canActivate(() => redirectUnauthorizedTo(['/register']))*/},
{path: 'rol/:documentId', component: RolComponent,/*...canActivate(() => redirectUnauthorizedTo(['/register']))*/}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolRoutingModule { }
