import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute, // Para recibir el argumento de lo que estamos buscando.
               public productosService: ProductosService ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      console.log(params.termino);
      this.productosService.buscarProducto( params.termino );
    });
  }

}
