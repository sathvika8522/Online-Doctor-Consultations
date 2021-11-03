import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { PatientformpageComponent } from './components/patientformpage/patientformpage.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { DoctorInfoComponent } from './components/doctor-info/doctor-info.component';
import { DoctorPageComponent } from './components/doctor-page/doctor-page.component';
import { DoctorsAvailablePageComponent } from './components/doctors-available-page/doctors-available-page.component';
import { DoctorDetailsFormComponent } from './components/doctor-details-form/doctor-details-form.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:'home' , component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'patientpage',component:PatientformpageComponent},
  {path:'doctorsList',component:DoctorsAvailablePageComponent},
  {path:'doctorInfo',component:DoctorInfoComponent},
  {path:'doctorpage',component:DoctorPageComponent},
  {path:'doctorformpage',component:DoctorDetailsFormComponent},
  {path:'PatientDetails',component:PatientDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
