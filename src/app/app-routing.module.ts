import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { MainComponent } from './componentes/main/main.component';
import { RegisterComponent } from './componentes/register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
{path: '' , pathMatch: 'full' , redirectTo: '/main'},
{path : 'main' , component : MainComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
{path:'register' , component: RegisterComponent },
{path: 'login' , component: LoginComponent},
{ path: 'gestionIncidencias', loadChildren: () => import('./componentes/gestion-incidencias/gestion-incidencias.module').then(m => m.GestionIncidenciasModule) },
{ path: 'incidencias', loadChildren: () => import('./componentes/incidencias/incidencias.module').then(m => m.IncidenciasModule) },
{ path: 'revisionIncidencias', loadChildren: () => import('./componentes/revision-incidencias/revision-incidencias.module').then(m => m.RevisionIncidenciasModule) },
{ path: 'rol', loadChildren: () => import('./componentes/rol/rol.module').then(m => m.RolModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
