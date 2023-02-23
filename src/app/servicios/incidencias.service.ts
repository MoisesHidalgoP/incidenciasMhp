import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {
  conexion: any = this.firebase.collection('incidencias');

  constructor(private firebase: AngularFirestore) { }


  //Metodo que recoge todas las incidencias
  getAll() {
    return this.conexion.snapshotChanges();
  }

  //Metodo que recoge una incidencia
  getIncidencia(documentId: string) {
    return this.conexion.doc(documentId).snapshotChanges();
  }

  //Metodo que crea una incidencia 
  createIncidencia(data: any) {
    return this.conexion.add(data);
  }

  //Metodo que actualiza una incidencia 
  updateIncidencia(coleccion: string, documentId: string, data: any) {
    return this.firebase.collection(coleccion).doc(documentId).update(data);
  }


  //Metodo que borra una incidencia
  deleteIncidencia(documentId: string){
    return this.conexion.doc(documentId).delete();
  }

   //Metodo quye filtra incidencia 
   filtrarIncidencia(revisada: boolean){
    return this.firebase.collection(this.conexion, ref => ref.where('revisada', '==', revisada)).snapshotChanges();
  }

  //Metodo que recoge una incidencia especifica 
  especificaIncidencia(documentId: string, id: number){
    return this.firebase.collection(this.conexion, ref => ref.where('id', '==', id)).doc(documentId).snapshotChanges();
  }

}

