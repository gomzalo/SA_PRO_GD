import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarcompetenciaComponent } from './registrarcompetencia.component';

describe('RegistrarcompetenciaComponent', () => {
  let component: RegistrarcompetenciaComponent;
  let fixture: ComponentFixture<RegistrarcompetenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarcompetenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarcompetenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
