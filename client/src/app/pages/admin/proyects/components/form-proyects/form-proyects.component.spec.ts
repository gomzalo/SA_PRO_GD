import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProyectsComponent } from './form-proyects.component';

describe('FormProyectsComponent', () => {
  let component: FormProyectsComponent;
  let fixture: ComponentFixture<FormProyectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProyectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
