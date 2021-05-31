import { Component } from '@angular/core';
import { provinciasService } from '../../georef/provincia/services/provincias.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent  {

 
   valores: string[] = [];

  get historial(){

      return this.provinciasService.historial;
      
  } 
 
  
  constructor( private provinciasService: provinciasService) {
    

   }

   buscar(termino:string){
     console.log("side bar");
     console.log(termino);
     this.provinciasService.buscarProvincia(termino);
   }

}
