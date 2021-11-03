import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctor-details-form',
  templateUrl: './doctor-details-form.component.html',
  styleUrls: ['./doctor-details-form.component.css']
})
export class DoctorDetailsFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  doctorDetails(ref:NgForm)
  {
    console.log(ref)
  }
}
