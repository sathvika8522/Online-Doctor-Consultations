import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private us:UserService,private router:Router) { }

  ngOnInit(): void {}
  
  onSignup(ref:NgForm)
  {
    console.log(ref)
    this.us.createUsers(ref).subscribe(
      res=>
      {
         if(res.message==='your account is created succefully :)')
         {
           alert('your account is created succefully :)')
           this.router.navigateByUrl('/signin')
         }
         else{
           alert(res.message)
           console.log(res.userobj)
         }
      },
      err=>
      {
         alert('errr in signup.component.ts................'+err.message)
      }
    ); 
     
  }

}
