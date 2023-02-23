import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  conexion: any = this.firebase.collection('usuarios');

  constructor(private auth:Auth,
  private firebase: AngularFirestore,
  ) { }

  register({email , password }:any){
    //Metodo que crea una incidencia 
  this.createUsuario({email , password });
  
    return createUserWithEmailAndPassword(this.auth , email,password);
  }

  login({email , password}:any){
    return signInWithEmailAndPassword(this.auth,email,password);
  }
  loginGoogle(){
    return signInWithPopup(this.auth , new GoogleAuthProvider());
  }

  logout(){
    return signOut(this.auth);
  }

  rolUsuario(email: string) {
    console.log(this.firebase.collection('usuarios', ref => ref.where("email", "==", email)).snapshotChanges());
    return this.firebase.collection('usuarios', ref => ref.where("email", "==", email)).snapshotChanges()
  }

  usuarioLogueado(email: string) {
    console.log(email);
    return this.firebase.collection('usuarios', ref => ref.where('email', '==', email)).snapshotChanges()
    
  }


  emailUsuario(){
    const usuario = this.auth.currentUser;
    return usuario?.email;
  }
  getOne(coleccion: string, documentId: string) {
    return this.firebase.collection(coleccion).doc(documentId).snapshotChanges();
  }

  update(coleccion: string, documentId: string, data: any) {
    return this.firebase.collection(coleccion).doc(documentId).update(data);
  }

  delete(coleccion: string, documentId: string) {
    return this.firebase.collection(coleccion).doc(documentId).delete();
  }


  getAll(coleccion: string) {
    return this.firebase.collection(coleccion).snapshotChanges();
  }
  
  //Metodo que crea una incidencia 
  createUsuario(data: any) {
    return this.conexion.add(data);
  }

 
}
