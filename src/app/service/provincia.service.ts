import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provincia } from '../models/provincia';
import { InterfeceProvincia } from '../georef/provincia/interface/provincia.interface';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

    provinciaURL = 'http://localhost:8080/georef/sss';
    private _historial: string[] = [];
 
    public resultados : InterfeceProvincia = null;
      get historial(){
 
          return [...this._historial];
        }

  constructor(private httpClient: HttpClient) { 

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados =  JSON.parse(localStorage.getItem('ultimoResultado')!) || [];

  }

  public provincia(nombre: string): Observable<Object> {
    return this.httpClient.get<InterfeceProvincia>(this.provinciaURL  + `provincia/${nombre}` );
  }
  buscarProvincia( nombre:string = ''){

    nombre = nombre.trim().toLocaleLowerCase();

    if(! this._historial.includes(nombre)){
      this._historial.unshift(nombre);
      this._historial = this._historial.splice(0,10); // limita a 10 elementos

      localStorage.setItem('historial', JSON.stringify(this._historial));
      
    }

    
    this.httpClient.get<InterfeceProvincia>(this.provinciaURL  + `provincia/${nombre}` )
    .subscribe( ( resp ) => {
      //console.log(resp);
      
      //this.resultados = resp;
      localStorage.setItem('ultimoResultado', JSON.stringify(this.resultados));
      
    });

  }
 

}
