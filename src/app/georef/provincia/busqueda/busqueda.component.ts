import { Component, ElementRef, ViewChild } from '@angular/core';
import { provinciasService } from '../services/provincias.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  @ViewChild('txtBuscar',null) txtBusacar!:ElementRef<HTMLInputElement>; // el ! indica es Nonnull assertion operator 
                                                  // como la variable no se inicializa y js dice
                                                  // que podria ser null, damos !.
  
    constructor(private ProvinciasService: provinciasService){

    }

    buscar( ) {
    
    const valor = this.txtBusacar.nativeElement.value;
    
      if (valor.trim().length === 0){
        return;
      }

    this.ProvinciasService.buscarProvincia(valor);

    this.txtBusacar.nativeElement.value = '';
  }
 

}
