import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptenciaComponent } from './comptencia.component';

describe('ComptenciaComponent', () => {
  let component: ComptenciaComponent;
  let fixture: ComponentFixture<ComptenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
