import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestarPasswordComponent } from './restar-password.component';

describe('RestarPasswordComponent', () => {
  let component: RestarPasswordComponent;
  let fixture: ComponentFixture<RestarPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestarPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestarPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
