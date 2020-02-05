import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Photo, User} from '../inferfaces/Photo';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  URI='http://localhost:4000/api/photos';
  UR1='http://localhost:4000/api/photosV'; 
  URI_in1='http://localhost:4000/api/signin';

  URL='http://165.227.20.230:4000/';
  URL1='http://localhost:4000/';
  URIi='http://165.227.20.230:4000/api/photos';
  UR1i='http://165.227.20.230:4000/api/photosV';
  URI_ini='http://localhost:4000/api/signin';


  constructor(private http:HttpClient) { }

  createPhoto(venta: string, tipo: string, precio1: string, sector: string, metros: string, caracteristicas: string, vendedor: string, photo: File){

  	const fd = new FormData();
  	fd.append('transaccion', venta);
    fd.append('tipo', tipo);
  	fd.append('precio', precio1);
    fd.append('sector', sector);
    fd.append('metros', metros);
    fd.append('caracteristicas', caracteristicas);
    fd.append('vendedor', vendedor);
  	fd.append('image', photo);

  	return this.http.post(`${this.URL}api/photos`, fd);
  }

  getPhotos(){
  	return this.http.get<Photo[]>(`${this.URL}api/photos`);
  }
  
  getPhotosV(vendedor: string){
    //return this.http.get<Photo[]>(`${this.UR1}5dcc92cbd23fc6026c6f5d29`);
    return this.http.post<Photo[]>(`${this.URL}api/photosV${vendedor}`, {vendedor});//ojo cambiar cuando ya subas
  }

  getPhotosVB(vendedor: string, transaccion:string, tipo: string, precio:string, sector:string){
    //return this.http.get<Photo[]>(`${this.UR1}5dcc92cbd23fc6026c6f5d29`);
    return this.http.post<Photo[]>(`${this.URL}api/photosV${vendedor}`, {vendedor, transaccion, tipo, precio, sector} );//ojo cambiar cuando ya subas
  }

  getPhotosVB1(transaccion:string, tipo: string, precio:string, sector:string){
    //return this.http.get<Photo[]>(`${this.UR1}5dcc92cbd23fc6026c6f5d29`);
    //console.log(tipo);
    //console.log(transaccion);
    return this.http.post<Photo[]>(`${this.URL}api/photosC`, {transaccion, tipo, precio, sector} );//ojo cambiar cuando ya subas
  }

  getPhoto(id: string){
	  return this.http.get<Photo>(`${this.URL}api/photos/${id}`)

   }

   deletePhoto(id: string ){
   	return this.http.delete(`${this.URL}api/photos/${id}`)
   }

   updatePhoto(id: string, transaccion:string, tipo:string, precio:string, sector:string, metros:string, caracteristicas: string, vendedor: string){
    		return this.http.put(`${this.URL}api/photos/${id}`, {transaccion, tipo, precio, sector, metros, caracteristicas, vendedor})
   }




   
}

