import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePixarComponent } from './home-pixar-component';

describe('HomePixarComponent', () => {
  let component: HomePixarComponent;
  let fixture: ComponentFixture<HomePixarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePixarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePixarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
