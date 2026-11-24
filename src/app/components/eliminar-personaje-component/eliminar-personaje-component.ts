import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServicePixar } from '../../services/service.pixar';

@Component({
  selector: 'app-eliminar-personaje-component',
  standalone: false,
  styleUrl: './eliminar-personaje-component.css',
  templateUrl: './eliminar-personaje-component.html',
})
export class EliminarPersonajeComponent {
  @ViewChild("cajaid") cajaid!: ElementRef
  mensaje!: string

  constructor (
    private _cdr: ChangeDetectorRef,
    private _service: ServicePixar,
  ) {}

  async eliminarPersonajes(): Promise<void> {
    let id = parseInt(this.cajaid.nativeElement.value)
    await this._service.eliminarPersonajeAsync(id)
    this.mensaje = "Personaje eliminado: " + id 
    this._cdr.detectChanges()
  }
}
