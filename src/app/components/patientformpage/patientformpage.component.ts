import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var webkitSpeechRecognition:any

@Component({
  selector: 'app-patientformpage',
  templateUrl: './patientformpage.component.html',
  styleUrls: ['./patientformpage.component.css']
})
export class PatientformpageComponent implements OnInit {

  speechText='om namah shivaya'
  i=0
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  record()
  {
    if('webkitSpeechRecognition' in window)
    {
      var recognition = new webkitSpeechRecognition();
      recognition.lang = "en-GB";
      console.log("this function called :D")
  
      recognition.start();
      recognition.onresult = function(event:any) {
        console.log(event);
        console.log("another function called :D")
        this.speechText= event.results[0][0].transcript;
        console.log(this.speechText,this.i);
        this.i=0
    }
    recognition.onerror=function(event:any)
    {
      console.log(event);
      recognition.stop();
    }
  }
}

result()
{
  alert("your report is sended to your mail........")
  this.router.navigateByUrl('/doctorsList');
}

}
