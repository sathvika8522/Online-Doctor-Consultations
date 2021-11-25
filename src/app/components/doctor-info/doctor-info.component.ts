import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {

  constructor(private ds:DoctorService) { }

  ngOnInit(): void {

  }

  appointment()
  {
    var x=localStorage.getItem('userobj')
    if(x!=null)
    {
      var patientDetails=JSON.parse(x)
    }
    let doctorMail=localStorage.getItem('email')
    let credentials={patientDetails:patientDetails,doctorMail}
    console.log(credentials,patientDetails)
    this.ds.makeAppointment(credentials).subscribe(
      res=>
      {
         alert('updated successfully...........')
      },
      err=>
      {
        alert('errr in doctor-info.comp.ts..............')
      }

    )

  }
}
