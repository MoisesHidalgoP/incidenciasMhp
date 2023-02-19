import { Component, OnInit } from '@angular/core';
import { IncidenciasService } from 'src/app/servicios/incidencias.service';

@Component({
  selector: 'app-revision-incidencias',
  templateUrl: './revision-incidencias.component.html',
  styleUrls: ['./revision-incidencias.component.css']
})
export class RevisionIncidenciasComponent implements OnInit {

  listaIncidencias: any[] = [];
  listaIncidenciasRevisadas: any[] = [];
  listaIncidenciasNoRevisadas: any[] = [];
  fontStyle?: string = ' ';

  constructor(private incidenciasService: IncidenciasService) { }

  ngOnInit(): void {
    this.getAll();
    this.getAllRevisadas();
    this.getAllNoRevisadas();
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

  getAllRevisadas() {
    this.incidenciasService.filtrarIncidencia(true).subscribe((incidenciasSnapshot: any) => {
      incidenciasSnapshot.forEach((incidenciaData:any) => {

        this.listaIncidenciasRevisadas.push({
          id: incidenciaData.payload.doc.id, 
          data: incidenciaData.payload.doc.data()
        });
        
      });
    })
  }

  getAllNoRevisadas() {
    this.incidenciasService.filtrarIncidencia(false).subscribe((incidenciasSnapshot: any) => {
      incidenciasSnapshot.forEach((incidenciaData:any) => {

        this.listaIncidenciasNoRevisadas.push({
          id: incidenciaData.payload.doc.id, 
          data: incidenciaData.payload.doc.data()
        });
        
      });
    })
  }

}