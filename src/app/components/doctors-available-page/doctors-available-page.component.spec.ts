import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsAvailablePageComponent } from './doctors-available-page.component';

describe('DoctorsAvailablePageComponent', () => {
  let component: DoctorsAvailablePageComponent;
  let fixture: ComponentFixture<DoctorsAvailablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsAvailablePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsAvailablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
