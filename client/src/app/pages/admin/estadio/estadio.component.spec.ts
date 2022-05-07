import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadioComponent } from './estadio.component';

describe('EstadioComponent', () => {
  let component: EstadioComponent;
  let fixture: ComponentFixture<EstadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
