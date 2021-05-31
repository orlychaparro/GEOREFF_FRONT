import { Component } from '@angular/core';
import { provinciasService } from '../services/provincias.service';
import { InterfeceProvincia } from '../interface/provincia.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent  {

  get resultados(){
    //console.log(this.resultados);
    return this.provinciasService.resultados;
  }

  


  constructor(private provinciasService: provinciasService){ 
   
  }
  
}
