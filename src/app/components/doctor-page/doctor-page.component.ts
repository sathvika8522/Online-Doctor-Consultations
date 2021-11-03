import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css']
})
export class DoctorPageComponent implements OnInit {

  a=[1,2,3,4,5,6]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
   
  trans()
  {
     this.router.navigateByUrl('/doctorformpage')
  }
  
  patientDetails()
  {
    this.router.navigateByUrl('/PatientDetails')
  }
}
