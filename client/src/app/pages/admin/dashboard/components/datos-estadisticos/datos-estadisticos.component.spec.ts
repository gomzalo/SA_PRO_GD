import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEstadisticosComponent } from './datos-estadisticos.component';

describe('DatosEstadisticosComponent', () => {
  let component: DatosEstadisticosComponent;
  let fixture: ComponentFixture<DatosEstadisticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosEstadisticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosEstadisticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
