import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  appointment()
  {
    alert('your appointment details sent to your mail........');
  }
}
