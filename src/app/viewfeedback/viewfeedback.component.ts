import { Component } from '@angular/core';
import { Corruption } from '../corruption';
import { CorruptionService } from '../corruption.service';
@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
export class ViewfeedbackComponent {
  constructor(private corruption:CorruptionService) { }
  model:any={};

  
  slst:any=[];
  ngOnInit(): void {
    debugger;
    this.corruption.getFeedback()
    .subscribe({
      next:(data)=>{
        this.slst=data as any[];
      },
      error:(err)=>{
        alert("error")
      }
    })

   
  }




}
