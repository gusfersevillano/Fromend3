import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, Params} from '@angular/router';
import {PhotoService} from '../../services/photo.service';
import {UserService} from  '../../service/singup.service';
import {Photo} from '../../inferfaces/Photo';
import {User} from '../../inferfaces/Photo';
import {NgModule} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';




@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})




export class PresentacionComponent implements OnInit {

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

   marked = false;
  theCheckbox = false;
  VENTA=false;
  ALQUILER= false;
  OTRO= false


  


 


  constructor(private photoService: PhotoService, 
              private router: Router,
              private activeRoute: ActivatedRoute,
              private UserService: UserService,

            


             
             ) { 

         
  }

toggleVisibility(e){
    this.marked= e.target.checked;
  }

  ngOnInit() {
  

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
        
        this.router.navigate(['/catalogo', {transaccion1:this.transaccion1, transaccion2:this.transaccion2, transaccion3:this.transaccion3, tipo:this.tipo, sector:this.sector,  pi:this.pi, pf:this.pf}])
       
        this.activeRoute.params.subscribe(params =>{

          
        })

       return false;
    }



}

