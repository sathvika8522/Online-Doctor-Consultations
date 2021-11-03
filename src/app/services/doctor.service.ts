import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private hc:HttpClient) { }

  hi()
  {
    return "om namah shivaya"
  }
}
