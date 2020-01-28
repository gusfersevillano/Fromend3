import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, Params} from '@angular/router';
import {PhotoService} from '../../services/photo.service';
import {UserService} from  '../../service/singup.service';
import {Photo} from '../../inferfaces/Photo';
import {User} from '../../inferfaces/Photo';


@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  transaccion: string;
  tipo: string;
  sector: string;
  precio: string;

  photo: Photo;
  photos =[];



  constructor(private photoService: PhotoService, 
              private router: Router,
              private activeRoute: ActivatedRoute,
              private UserService: UserService,) { }

  ngOnInit() {



  }




  buscarproyectos(transaccion:HTMLInputElement, tipo:HTMLInputElement, sector:HTMLInputElement, precio:HTMLInputElement):boolean{

       this.transaccion= String(transaccion.value);
       this.tipo= String(tipo.value);
       this.sector= String(sector.value);
       this.precio= String(precio.value);                     
       
        //console.log(this.transaccion);
        //console.log(this.tipo);
        //console.log(this.sector);
        //console.log(this.precio);
        
        this.router.navigate(['/catalogo', {transaccion:this.transaccion, tipo:this.tipo, sector:this.sector, precio:this.precio}])
       
        this.activeRoute.params.subscribe(params =>{
         /*         
          this.photoService.getPhotosVB1(transaccion.value, tipo.value, precio.value, sector.value).subscribe(
              res => {//this.photos = res; 
                     this.router.navigate(['/catalogo', {transaccion:this.transaccion, tipo:this.tipo, sector:this.sector, precio:this.precio}])
                      },
              err=> console.log(err)
         )*/
          
        })

       return false;
    }

}

