import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { SingupComponent } from './components/singup/singup.component';
import { SinginComponent } from './components/singin/singin.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EquipoComponent } from './components/equipo/equipo.component';



import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PhotoFormComponent,
    PhotoPreviewComponent,
    PhotoListComponent,
    SingupComponent,
    SinginComponent,
    PrincipalComponent,
    PresentacionComponent,
    CatalogoComponent,
    ServiciosComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
