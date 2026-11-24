import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServicePixar } from './services/service.pixar';
import { HomePixarComponent } from './components/home-pixar-component/home-pixar-component';
import { CrearPersonajeComponent } from './components/crear-personaje-component/crear-personaje-component';
import { EliminarPersonajeComponent } from './components/eliminar-personaje-component/eliminar-personaje-component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    HomePixarComponent,
    CrearPersonajeComponent,
    EliminarPersonajeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServicePixar],
  bootstrap: [App],
})
export class AppModule {}
