import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarestadioComponent } from './registarestadio.component';

describe('RegistarestadioComponent', () => {
  let component: RegistarestadioComponent;
  let fixture: ComponentFixture<RegistarestadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistarestadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistarestadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
