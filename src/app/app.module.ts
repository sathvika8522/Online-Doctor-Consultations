import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PatientformpageComponent } from './components/patientformpage/patientformpage.component';
import { DoctorsAvailablePageComponent } from './components/doctors-available-page/doctors-available-page.component';
import { DoctorInfoComponent } from './components/doctor-info/doctor-info.component';
import { DoctorPageComponent } from './components/doctor-page/doctor-page.component';
import { DoctorDetailsFormComponent } from './components/doctor-details-form/doctor-details-form.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    ContactusComponent,
    PatientformpageComponent,
    DoctorsAvailablePageComponent,
    DoctorInfoComponent,
    DoctorPageComponent,
    DoctorDetailsFormComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
