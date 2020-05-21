import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, Params} from '@angular/router';
import {PhotoService} from '../../services/photo.service';
import {UserService} from  '../../service/singup.service';
import {Photo} from '../../inferfaces/Photo';
import {User} from '../../inferfaces/Photo';



@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  vendedor: string;
  id: string;
  idv: string;
  photo: Photo;
  photoT: Photo;
  
  photos =[];
  photosT =[];
  user: User;
  user1: string;

//nuevo
  transaccion1: string;
   transaccion2: string;
    transaccion3: string;
  tipo: string;
  sector: string;
  precio: string;
  pi: string;
  pf: string;
  constructor(private photoService: PhotoService, 
              private router: Router,
              private activeRoute: ActivatedRoute,
              private UserService: UserService,
              ) { }

    ngOnInit() {
     

     

     this.activeRoute.params.subscribe(params =>{


        this.idv= params ['idv']; 
        this.UserService.getUsuario(this.idv).subscribe(
            res => {this.user1 = res.username
                          if (!this.photo){
                                if(this.user1==='daniel espinosa'){

                                  //console.log(this.idv) 
                                  this.photoService.getPhotosVB1(this.transaccion1, this.transaccion2, this.transaccion3, this.tipo, this.precio, this.pi, this.pf).subscribe(
                                  res => {this.photos = res; 
                                   // console.log((this.photosT));
                                              },
                                          err=> console.log(err),
                                         
                                      )

                                }else 
                                {
                                  console.log('no eres daniel')
                                  this.photoService.getPhotosV(this.idv).subscribe(
                                  res => {this.photos = res; 
                                     // console.log(this.photos)
                                   }, 
                                   err=> console.log(err)
                                  )

                                }

                          }


            },
            err=> console.log(err)
         )
      



//es est lo nuevo 

        this.photoService.getPhotosVB1(this.transaccion1, this.transaccion2, this.transaccion3, this.tipo, this.precio, this.pi, this.pf).subscribe(
            res => {this.photosT = res; 
                   // console.log((this.photosT));
                  },
              err=> console.log(err),
             
          )
    
// aca se acaba lo nuevo 

      
      })


     

    }

  



  selectedCard(id: string, idv:string){
    	this.router.navigate(['/photos', idv, id]);

    	}
  
  buscarproyectos(transaccion:HTMLInputElement, tipo:HTMLInputElement,  precio:HTMLInputElement, sector:HTMLInputElement, vendedor: HTMLInputElement):boolean{

        this.activeRoute.params.subscribe(params =>{
          this.idv= params ['idv'];
          
          this.photoService.getPhotosVB(this.idv, transaccion.value, tipo.value, precio.value, sector.value).subscribe(
              res => {this.photos = res; },
              err=> console.log(err)
          )
          //console.log(this.photos); 
        })

       return false;
    }   



  }




