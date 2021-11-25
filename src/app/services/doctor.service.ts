import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private hc:HttpClient) { }

  submitDoctorDetails(credentials:any):Observable<any>
  {
    return this.hc.post("/doctor/details",credentials)
  }

  getDoctors():Observable<any>
  {
    return this.hc.get("/doctor/getDetails")
  }

  makeAppointment(credentials):Observable<any>
  {
    return this.hc.post("/doctor/patientDetails",credentials)
  }


}