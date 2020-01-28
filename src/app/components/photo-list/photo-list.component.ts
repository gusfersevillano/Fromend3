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
  photos =[];
  user: User;
  user1: string;
  constructor(private photoService: PhotoService, 
              private router: Router,
              private activeRoute: ActivatedRoute,
              private UserService: UserService,
              ) { }

    ngOnInit() {
     
     
     this.activeRoute.params.subscribe(params =>{
        this.idv= params ['idv']; 
        this.UserService.getUsuario(this.idv).subscribe(
            res => {this.user1 = res.username},
            err=> console.log(err)
         )
      
        if (!this.photo){
                this.photoService.getPhotosV(this.idv).subscribe(
                res => {this.photos = res; }, 
               err=> console.log(err)
                )
        }
      
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




