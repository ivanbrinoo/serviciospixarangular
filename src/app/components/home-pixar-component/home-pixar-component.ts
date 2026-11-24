import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Pixar } from '../../models/pixar';
import { ServicePixar } from '../../services/service.pixar';

@Component({
  selector: 'app-home-pixar-component',
  standalone: false,
  styleUrl: './home-pixar-component.css',
  templateUrl: './home-pixar-component.html',
})
export class HomePixarComponent implements OnInit{
  arraypersonajespixar: Pixar[] = []

  constructor (
    private _cdr: ChangeDetectorRef,
    private _service: ServicePixar,
  ) {}
  async ngOnInit(): Promise<void> {
    this.arraypersonajespixar = await this._service.getPersonajesAsync();
    this._cdr.detectChanges();
  }
}
