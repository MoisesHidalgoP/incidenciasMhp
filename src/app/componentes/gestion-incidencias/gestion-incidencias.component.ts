import { Component, OnInit } from '@angular/core';
import { IncidenciasService } from 'src/app/servicios/incidencias.service';

@Component({
  selector: 'app-gestion-incidencias',
  templateUrl: './gestion-incidencias.component.html',
  styleUrls: ['./gestion-incidencias.component.css']
})
export class GestionIncidenciasComponent implements OnInit {

  listaIncidencias: any[] = [];

  constructor(private incidenciasService: IncidenciasService) { }

  ngOnInit(): void {
    this.getAll();
  }


  getAll(){ 
    this.incidenciasService.getAll().subscribe((incidenciasSnapshot: any) => {
      incidenciasSnapshot.forEach((incidenciaData:any) => {

        this.listaIncidencias.push({
          id: incidenciaData.payload.doc.id, 
          data: incidenciaData.payload.doc.data()
        });
        
      });
    })
  }

}