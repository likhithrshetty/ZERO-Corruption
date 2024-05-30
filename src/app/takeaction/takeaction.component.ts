import { Component } from '@angular/core';
import { Corruption } from '../corruption';
import { CorruptionService } from '../corruption.service';
@Component({
  selector: 'app-takeaction',
  templateUrl: './takeaction.component.html',
  styleUrls: ['./takeaction.component.css']
})
export class TakeactionComponent {

  constructor(private corruption:CorruptionService){}
  slst:any=[];
  dlst:any=[];
  model:any={};
  dslst:any=[];
  isdept=false

  errormessage:string="";
  ngOnInit(): void {
    debugger;
    this.corruption.getDepartment()
      .subscribe({
        next: (data) => {
          this.dlst = data as any[];
        }
      })
  }

  get()
  { 
   
    this.corruption.TakeAction()
    .subscribe({
      next: (data) => {
        this.slst = data.filter((item: any) => item.department.did==this.model.did && item.status=='Pending');
      }
    });
  
    this.isdept=true
    
  }

  action(id:any)
  {
    debugger;

    this.corruption.AllotCrime(id)
    .subscribe({
      next:(data)=>{
        alert(data)
      },
      error:(err)=>{
        alert("error")
      }
    })
  }

}
