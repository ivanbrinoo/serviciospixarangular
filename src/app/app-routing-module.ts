import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { HomePixarComponent } from './components/home-pixar-component/home-pixar-component';
import { CrearPersonajeComponent } from './components/crear-personaje-component/crear-personaje-component';
import { EliminarPersonajeComponent } from './components/eliminar-personaje-component/eliminar-personaje-component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "homepixar", component: HomePixarComponent},
  { path: "crear", component: CrearPersonajeComponent},
  { path: "eliminar", component: EliminarPersonajeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
