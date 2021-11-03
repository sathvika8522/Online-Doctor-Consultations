import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientformpageComponent } from './patientformpage.component';

describe('PatientformpageComponent', () => {
  let component: PatientformpageComponent;
  let fixture: ComponentFixture<PatientformpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientformpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientformpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
