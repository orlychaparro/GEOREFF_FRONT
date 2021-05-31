import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../../../service/token.service';
import { provinciasService } from '../../provincia/services/provincias.service'
import { InterfeceProvincia, Centroide } from '../interface/provincia.interface';


@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css']
})
export class ProvinciaComponent implements OnInit {

  public resultados : any = null;
  
  //datos: Object = null;
  
  roles: string[];
  isAdmin = false;

  constructor(
   // private provinciasService: provinciasService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    //this.cargarProductos();
    //this.datos 
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

 /*  cargarProductos(): void {
    this.provinciasService.buscarProvincia().subscribe(
     
      data  => {
        this.resultados = data;
        console.log(this.resultados);
        console.log(data);
        //console.log(this.resultados.provincias[0].centroide.lon);
        //this.productos = data;
      },
      err => {
        console.log(err);
      }
    ); */
 // }

  

}
