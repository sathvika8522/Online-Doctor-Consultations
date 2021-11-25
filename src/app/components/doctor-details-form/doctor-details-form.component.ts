import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-details-form',
  templateUrl: './doctor-details-form.component.html',
  styleUrls: ['./doctor-details-form.component.css']
})
export class DoctorDetailsFormComponent implements OnInit {

  constructor(private router:Router , private ds:DoctorService) { }

  ngOnInit(): void {
  }
  
  doctorDetails(ref:NgForm)
  {
    console.log(ref)
    this.ds.submitDoctorDetails(ref).subscribe(
      res=>
      {
          if(res.message==='your details are submitted succesfully.............')
          {
            alert('your details are submitted succesfully.............')
          }
      },
      err=>
      {
         alert('err in doctor-details-form.component.ts................')
      }
    );
}
}