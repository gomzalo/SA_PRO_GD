import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBranchsComponent } from './form-branchs.component';

describe('FormBranchsComponent', () => {
  let component: FormBranchsComponent;
  let fixture: ComponentFixture<FormBranchsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBranchsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBranchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
