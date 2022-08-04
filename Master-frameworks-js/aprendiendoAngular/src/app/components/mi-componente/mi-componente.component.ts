import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html',
})
export class  MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;


    constructor(){
        this.titulo = 'Hola mundo soy Julio';
        this.comentario = 'Este es mi primer componente en Angular';
        this.year = 2022;
        this.mostrarPeliculas = true;

    //    console.log('mi componente esta cargado'); 
    //    console.log(this.comentario, this.titulo, this.year); 
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
}