import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IncidenciasService } from 'src/app/servicios/incidencias.service';

@Component({
  selector: 'app-detalle-incidencia',
  templateUrl: './detalle-incidencia.component.html',
  styleUrls: ['./detalle-incidencia.component.css']
})
export class DetalleIncidenciaComponent implements OnInit {

   //Formulario

   datosIncidencia = this.fb.group({
    descripcion: ['', Validators.required],
    estado: ['', Validators.required],
    fecha: ['', Validators.required],
    lugar: ['', Validators.required],
    persona: ['', Validators.required],
    responsable: ['',],
    solucion: ['', Validators.required]
  });


  nueva: boolean = false;
  documentId: any;
  coleccion:any;
  dataIncidencia: any;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private incidenciasService: IncidenciasService,
    private ruta: ActivatedRoute,
  
  ) { }

  ngOnInit(): void {
    console.log('hola soy formulario iincidencias');
    this.ruta.params.subscribe( params => {
      if(params['id']){
        this.documentId = String(params['id']);
        this.nueva = false;
        console.log('editar');
        // mostrar la incidencia en el formulario
        this.incidenciasService.getIncidencia(this.documentId).subscribe(
          (resp: any) => {
            this.datosIncidencia.setValue(resp.payload.data());
          }
        )
      }else{
        console.log('nueva');
        this.nueva=true;
      }
    })
  }
  guardar() {
    if(this.nueva){
      // guardar datos con createIncidencia
      this.incidenciasService.createIncidencia(this.datosIncidencia.value).then(
        () => {
          alert('Incidencia creada, enhorabuena');
          this.cancel();
        }, (error: any) => {
          alert("Error: " + error);
        }
      )
      }
    }    
    cancel() {
      this.location.back();
    }

    actualizarEstado(){
      this.dataIncidencia = this.datosIncidencia.value;
  
      if (this.datosIncidencia.valid) {
        console.log("Estas entrado por aqui");
        this.incidenciasService.updateIncidencia("incidencias",this.documentId, this.dataIncidencia).then(
          () => {
            alert("Registro actualizado");
          },
          (error: any) => {
            alert("¡A ocurrido un error!");
            console.log(error);
          }
        );
    
      }else{
        this.dataIncidencia.reset();
        alert("Complete los campos");
      }
    }

    goBack(): void {
      this.location.back();
    }


}