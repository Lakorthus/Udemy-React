import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../models/pelicula';
@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public peliculas: Pelicula[];
  public favorita!: Pelicula;

  constructor() {
    this.titulo = 'Peliculas funciona';

    this.peliculas = [
      new Pelicula(
        'Spiderman 4',
        2022,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Ee-gTAKvTR3QIy5yO91FEh8r6mFL82Efl9NeKr_SJ_sHaHoLUdBr9mPpXQSW_kAW8FY&usqp=CAU'
      ),
      new Pelicula(
        'Avengers',
        2020,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNyfbWV_X1cmcVAx-MzZd_Lgkv3lzA5XyZnA&usqp=CAU'
      ),
      new Pelicula(
        'Superman',
        2018,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWCsNUhGxi0Lg1e_uShhRhIHRYuhUjYJMhg&usqp=CAU'
      ),

      // {
      //   year:2022,
      //   title: 'Spiderman 4',
      //   image:
      //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Ee-gTAKvTR3QIy5yO91FEh8r6mFL82Efl9NeKr_SJ_sHaHoLUdBr9mPpXQSW_kAW8FY&usqp=CAU',
      // },
      // {
      //   year:2020,
      //   title: 'Avengers',
      //   image:
      //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNyfbWV_X1cmcVAx-MzZd_Lgkv3lzA5XyZnA&usqp=CAU',
      // },
      // {
      //   year:2018,
      //   title: 'Superman',
      //   image:
      //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWCsNUhGxi0Lg1e_uShhRhIHRYuhUjYJMhg&usqp=CAU'

      // },
    ];
  }

  ngOnInit(): void {
    console.log(this.peliculas);
    console.log('Componente iniciado');
  }

  ngDoCheck(): void {
    console.log('Do check lanzado');
  }

  cambiarTitulo() {
    this.titulo = 'El titulo ha sido cambiado';
  }

  ngOnDestroy(): void {
    console.log('El componente se va a eliminar');
  }

  mostrarFavorita(event:any){
    this.favorita = event.pelicula
  }
}
