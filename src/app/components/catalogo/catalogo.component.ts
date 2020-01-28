import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, Params} from '@angular/router';
import {PhotoService} from '../../services/photo.service';
import {Photo} from '../../inferfaces/Photo';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  transaccion: string;
  tipo: string;
  sector: string;
  precio: string;

    photo: Photo;	  
    photos =[];
    catalogo =[];

  constructor(private photoService: PhotoService, 
              private router: Router,
              private activeRoute: ActivatedRoute,
              ) { }

  ngOnInit() {


        //console.log(this.photos); 
            //this.photoService.getPhotos().subscribe(
          // 		res => {
          // 			this.photos= res;
          // 		},  		err => console.log(err))

          this.activeRoute.params.subscribe(params =>{
          
          this.transaccion= params ['transaccion'];
          this.tipo= params ['tipo'];          
          this.sector= params ['sector'];
          this.precio= params ['precio'];
          //console.log(params['transaccion']);
          //console.log(params['tipo']);
          //console.log(params['sector']);
          //console.log(params['precio']);

          this.photoService.getPhotosVB1(this.transaccion, this.tipo, this.precio, this.sector).subscribe(
              res => {this.photos = res; },
              err=> console.log(err)
          )
          //console.log(this.photos); 
        })}    



  
/*
  buscarproyectos(transaccion:HTMLInputElement, tipo:HTMLInputElement,  precio:HTMLInputElement, sector:HTMLInputElement, vendedor: HTMLInputElement):boolean{

        this.activeRoute.params.subscribe(params =>{
          
          
          this.photoService.getPhotosVB1(transaccion.value, tipo.value, precio.value, sector.value).subscribe(
              res => {this.photos = res; },
              err=> console.log(err)
          )
          //console.log(this.photos); 
        })

       return false;
    }  

    */ 
  }