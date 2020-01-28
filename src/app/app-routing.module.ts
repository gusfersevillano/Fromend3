import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhotoListComponent} from './components/photo-list/photo-list.component';
import {PhotoFormComponent} from './components/photo-form/photo-form.component';
import {PhotoPreviewComponent} from './components/photo-preview/photo-preview.component';
import {SingupComponent} from './components/singup/singup.component';
import {SinginComponent} from './components/singin/singin.component';
import {PrincipalComponent} from './components/principal/principal.component';
import {PresentacionComponent} from './components/presentacion/presentacion.component';
import {CatalogoComponent} from './components/catalogo/catalogo.component';
import {EquipoComponent} from './components/equipo/equipo.component';
import {ServiciosComponent} from './components/servicios/servicios.component';


const routes: Routes = [

{
	path:'principal',
	component: PrincipalComponent,
},
{
	path:'catalogo',
	component: CatalogoComponent,
},
{
	path:'servicios',
	component: ServiciosComponent,
},
{
	path:'equipo',
	component: EquipoComponent,
},
{
	path:'presentacion',
	component: PresentacionComponent,
},
{
	path:'signin',
	component: SinginComponent,
},
{
	path:'signup',
	component: SingupComponent,
},
{
	path:'photos/:idv',
	component: PhotoListComponent,
},

{
	path: 'photos/:idv/new',
	component: PhotoFormComponent,
},
{
	path: 'photos/:idv/:id',//se coloca : porque es dinámico
	component: PhotoPreviewComponent,
},
{
	path:'',
	redirectTo:'/presentacion',
	pathMatch:'full',
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
