/*om namah shivaya*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private hc:HttpClient) { }
  
  x="har har mahadev";
  hi()
  {
    return "om namah shivaya";
  }
  createUsers(credentials:any):Observable<any>
  {
    return this.hc.post('/user/createuser',credentials);
  }

  checkUser(credentials:any):Observable<any>
  {
    return this.hc.post('/user/login',credentials);
  }
}
