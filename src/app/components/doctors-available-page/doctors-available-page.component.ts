import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctors-available-page',
  templateUrl: './doctors-available-page.component.html',
  styleUrls: ['./doctors-available-page.component.css']
})
export class DoctorsAvailablePageComponent implements OnInit {
  
  doctors=[]
  constructor(private router:Router,private ds:DoctorService) { }

  ngOnInit(): void {
    this.ds.getDoctors().subscribe(
      res=>
      {
         this.doctors=res.message
         console.log(this.doctors)
      },
      err=>
      {
        console.log('errr in doctors-available-page.component.ts')
      }
    );
  }
  
  
  appointment(email:any)
  {
    this.router.navigateByUrl('/doctorInfo')
    localStorage.setItem('email',email)
  }

}
