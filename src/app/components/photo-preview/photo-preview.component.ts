import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {PhotoService} from '../../services/photo.service'
import {Photo} from '../../inferfaces/Photo'

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {
	id: string;
	photo: Photo;
  idv: string;
  constructor(
  	private activeRoute: ActivatedRoute,
  	private router: Router,
  	private photoService: PhotoService,
  	) { }

  ngOnInit() {
  	this.activeRoute.params.subscribe(params =>{
  		this.id= params ['id'];
      this.idv= params ['idv'];
  	//	console.log(this.idv);
      this.photoService.getPhoto(this.id).subscribe(
  			res => {this.photo = res;
            //console.log(this.photo);
        },
  			err=> console.log(err)
  			)
        console.log(this.photo);
  	})

  }

  deletePhoto(id: string){
    
  this.activeRoute.params.subscribe(params =>{
      this.id= params ['id'];
      this.idv= params ['idv'];
      console.log(this.idv);
    })



  	this.photoService.deletePhoto(id).subscribe(
  		res=> {
  			console.log(res),
  			this.router.navigate(['/photos/', this.idv])},
  		err=> console.log(err)
  		)
  }

  updatePhoto(transaccion:HTMLInputElement, tipo:HTMLInputElement, sector:HTMLInputElement, precio:HTMLInputElement, metros:HTMLInputElement, caracteristicas:HTMLTextAreaElement, vendedor: HTMLInputElement): boolean {
  	
  	this.photoService.updatePhoto(this.id, transaccion.value, tipo.value,  sector.value, precio.value,  metros.value, caracteristicas.value, vendedor.value).subscribe(
  		res=> {
  			//console.log(res),
  			this.router.navigate(['/photos', this.idv])},	
  		err=> console.log(err)
  		);
  	return false;
  }

}
