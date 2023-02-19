import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private usuarioServicio : UsuarioService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  onClick(){
    this.usuarioServicio.logout()
    .then(()=> {
      this.router.navigate(['/register'])
    })
    .catch(error => console.log(error))
  }

}
