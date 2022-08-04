import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;


  constructor() { 
    this.titulo = 'Peliculas funciona'
   
    console.log('Constructor lanzado');
  }

  ngOnInit(): void {
    console.log('Componente iniciado');
  }

  ngDoCheck(): void {
    console.log('Do check lanzado');
  }

  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado";
  }

  ngOnDestroy(): void {
    console.log('El componente se va a eliminar')
  }
}
