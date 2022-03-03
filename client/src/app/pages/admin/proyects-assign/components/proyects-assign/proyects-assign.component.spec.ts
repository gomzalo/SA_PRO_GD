import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsAssignComponent } from './proyects-assign.component';

describe('ProyectsAssignComponent', () => {
  let component: ProyectsAssignComponent;
  let fixture: ComponentFixture<ProyectsAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectsAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectsAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
