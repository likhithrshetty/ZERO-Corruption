import { Component } from '@angular/core';
import { Corruption } from '../corruption';
import { CorruptionService } from '../corruption.service';
import { FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-postfeedback',
  templateUrl: './postfeedback.component.html',
  styleUrls: ['./postfeedback.component.css']
})
export class PostfeedbackComponent {
  constructor(private corruption:CorruptionService){}
  model:any={};
 

  ngOnInit(): void {
  }
  
  OnSubmit()
  {
    debugger;
  
const PId=sessionStorage.getItem("UserId");
    this.corruption.PostFeedback(this.model,PId)
    .subscribe({
      next:(data)=>{
      alert(data)
        this.model.feedback="";
      },
      error:(err)=>{
        alert("error")
      }
    })
  
}
}
