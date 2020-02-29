import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, Params} from '@angular/router';
import {PhotoService} from '../../services/photo.service';
import {Photo} from '../../inferfaces/Photo';
import {NgModule} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  transaccion: string;
  transaccion1: string;
  transaccion2: string;
  transaccion3: string;
  tipo: string;
  sector: string;
  precio: string;
  pi: string;
  pf: string;

    photo: Photo;	  
    photos =[];
    catalogo =[];

       marked = false;
  theCheckbox = false;
  VENTA=false;
  ALQUILER= false;
  OTRO= false

  constructor(private photoService: PhotoService, 
              private router: Router,
              private activeRoute: ActivatedRoute,
              ) { }

  toggleVisibility(e){
    this.marked= e.target.checked;
  }

  ngOnInit() {


   

          this.activeRoute.params.subscribe(params =>{
          
          this.transaccion= params ['transaccion1'];
          this.transaccion1= params ['transaccion1']; 
          this.transaccion2= params ['transaccion2'];
          this.transaccion3= params ['transaccion3'];         
          this.tipo= params ['tipo'];          
          this.sector= params ['sector'];
          this.pi= params['pi'];
          this.pf= params['pf'];

          //console.log(params['transaccion']);
          //console.log(params['transaccion1']);
          //console.log(params['sector']);
          //console.log(params['precio']);

          this.photoService.getPhotosVB1(this.transaccion1, this.transaccion2, this.transaccion3, this.tipo,  this.sector, this.pi, this.pf).subscribe(
              res => {this.photos = res; },
              err=> console.log(err)
          )
          //console.log(this.photos); 
        })
    }    


 buscarproyectos(transaccion1:HTMLInputElement, transaccion2:HTMLInputElement, transaccion3:HTMLInputElement, tipo:HTMLInputElement, sector:HTMLInputElement,  pi:HTMLInputElement, pf:HTMLInputElement):boolean{

       if (transaccion1.value==="true"){
         this.transaccion1="VENTA"
       }else{
         this.transaccion1=""
       }


       if (transaccion2.value==="true"){
         this.transaccion2="ALQUILER"
       }else{
         this.transaccion2=""
       }

       if (transaccion3.value==="true"){
         this.transaccion3="OTRO"
       }else{
         this.transaccion3=""
       }
       //this.transaccion1= String(transaccion1.value);
       //this.transaccion2= String(transaccion2.value);
       //this.transaccion3= String(transaccion3.value);
       this.tipo= String(tipo.value);
       this.sector= String(sector.value);
       this.pi= String(pi.value);
       this.pf= String(pf.value);                    
       
        //console.log(this.transaccion);
        //console.log(this.tipo);
        //console.log(this.sector);
        //console.log(this.precio);
        
        this.photoService.getPhotosVB1(this.transaccion1, this.transaccion2, this.transaccion3, this.tipo,  this.sector, this.pi, this.pf).subscribe(
              res => {this.photos = res; },
              err=> console.log(err)
          )



        
       
        this.activeRoute.params.subscribe(params =>{
    
          
        })

       return false;
    }
  


  }