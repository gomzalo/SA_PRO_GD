import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBusinessComponent } from './form-business.component';

describe('FormBusinessComponent', () => {
  let component: FormBusinessComponent;
  let fixture: ComponentFixture<FormBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
