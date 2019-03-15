import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

   private cargarInfo() {
    // console.log('Servicio infoPagina cargada.');

    // Leer el fichero Json para poder utilizar sus valores en nuestras paginas:
    this.http.get('assets/data/data-jason.json')  // indicamos el origen del fichero.
      .subscribe( (resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;

        // console.log(resp);
        // console.log('DCC:', resp['twitter']);
        // console.log(this.info.titulo);
      });
   }

   private cargarEquipo() {
    // Leer el fichero Json para poder utilizar sus valores en nuestras paginas:
    this.http.get('https://angular-html-ee492.firebaseio.com/equipo.json')  // indicamos el origen del fichero.
      .subscribe( (resp: any[]) => {

        this.equipo = resp;
        // console.log(resp);
      });
   }
}
