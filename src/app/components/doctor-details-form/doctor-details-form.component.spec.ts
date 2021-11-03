import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDetailsFormComponent } from './doctor-details-form.component';

describe('DoctorDetailsFormComponent', () => {
  let component: DoctorDetailsFormComponent;
  let fixture: ComponentFixture<DoctorDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
