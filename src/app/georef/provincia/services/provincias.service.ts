import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfeceProvincia } from '../interface/provincia.interface';

@Injectable({
  providedIn: 'root'
})
export class provinciasService {
  private provinciaURL: string = 'http://localhost:8080/georef/';
  private _historial: string[] = [];
  // TODO: Camiar any por subtipo correspondiente
  public resultados : InterfeceProvincia = null;
  get historial(){
 
      return [...this._historial];
  }

  constructor (private http: HttpClient){

    // if( localStorage.getItem('historial') ){
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados =  JSON.parse(localStorage.getItem('ultimoResultado')!) || [];
    

  }

  buscarProvincia( nombre:string = ''){

    nombre = nombre.trim().toLocaleLowerCase();

    if(! this._historial.includes(nombre)){
      this._historial.unshift(nombre);
      this._historial = this._historial.splice(0,10); // limita a 10 elementos

      localStorage.setItem('historial', JSON.stringify(this._historial));
      
    }

    


    this.http.get<InterfeceProvincia>(this.provinciaURL  + `provincia/${nombre}` )
    .subscribe( ( resp ) => {
      
      
      console.log("Busqueda por nombre = " + nombre + " Cantidad Registros = " + resp.cantidad);
      console.log(resp);
     

      this.resultados = resp;
      localStorage.setItem('ultimoResultado', JSON.stringify(this.resultados));
      
    });

  }



}
