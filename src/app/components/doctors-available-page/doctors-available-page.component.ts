import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors-available-page',
  templateUrl: './doctors-available-page.component.html',
  styleUrls: ['./doctors-available-page.component.css']
})
export class DoctorsAvailablePageComponent implements OnInit {
  a=[1,2 ,3 , 4 , 5 , 6]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
   
  appointment()
  {
     this.router.navigateByUrl('/doctorInfo')
  }

}
