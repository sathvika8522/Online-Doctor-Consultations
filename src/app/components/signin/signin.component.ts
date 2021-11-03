import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/components/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router:Router , private us:UserService) { }

  ngOnInit(): void {
  }

  usertype:string=''

  onSignin(ref:NgForm)
  {
    this.us.checkUser(ref).subscribe(
      res=>
      {
        if(res.message==='login success')
        {
           alert('logged in succefully..........')
           localStorage.setItem('token',res.token);
           localStorage.setItem('username',res.username);
           localStorage.setItem('userobj',res.userobj);
           localStorage.setItem('userOccup',res.userOccup);

           
           if(res.userOccup=='doctor')
           {
              this.router.navigateByUrl("/doctorpage")
           }
          else
          {
              this.router.navigateByUrl('/patientpage')
          }
        }
        else
        {
          alert(res.message)
          console.log(res.obj)
        }
      },
      err=>
      {
         alert(err.message)
      }
    );

      // if(this.usertype=='doctor')
      // {
      //   this.router.navigateByUrl("/doctorpage")
      // }
      // else
      // {
      //   this.router.navigateByUrl('/patientpage')
      // }
      
  }


}
