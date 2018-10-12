import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationLogicComponent } from './registration-logic.component';

describe('RegistrationLogicComponent', () => {
  let component: RegistrationLogicComponent;
  let fixture: ComponentFixture<RegistrationLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
