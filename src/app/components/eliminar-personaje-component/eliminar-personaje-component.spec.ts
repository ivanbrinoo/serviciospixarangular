import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarPersonajeComponent } from './eliminar-personaje-component';

describe('EliminarPersonajeComponent', () => {
  let component: EliminarPersonajeComponent;
  let fixture: ComponentFixture<EliminarPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarPersonajeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarPersonajeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
