import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServicePixar } from '../../services/service.pixar';
import { Pixar } from '../../models/pixar';

@Component({
  selector: 'app-crear-personaje-component',
  standalone: false,
  styleUrl: './crear-personaje-component.css',
  templateUrl: './crear-personaje-component.html',
})
export class CrearPersonajeComponent {
  @ViewChild("cajanombre") cajanombre!: ElementRef
  @ViewChild("cajaimagen") cajaimagen!: ElementRef
  @ViewChild("cajapelicula") cajapelicula!: ElementRef
  mensaje!: string

  constructor (
    private _cdr: ChangeDetectorRef,
    private _service: ServicePixar,
  ) {}

  async insertarPersonaje(): Promise<void> {
    let nombre = this.cajanombre.nativeElement.value
    let imagen = this.cajaimagen.nativeElement.value
    let pelicula = this.cajapelicula.nativeElement.value
    let pers = new Pixar(0, nombre, imagen, pelicula);
    await this._service.crearPersonajesAsync(pers);
    this.mensaje = "Personaje creado"
    this._cdr.detectChanges()
    
  }

}
