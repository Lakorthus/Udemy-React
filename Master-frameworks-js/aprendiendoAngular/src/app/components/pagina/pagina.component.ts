import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre!: string;
  public apellidos!: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params)=>{
      this.nombre = params['nombre'];
      this.apellidos = params['apellidos'];
    });
  }

  redireccion(){
    this._router.navigate(['/pagina-de-pruebas','Julio','Velezmoro']);
  }

}
