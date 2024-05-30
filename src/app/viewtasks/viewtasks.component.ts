import { Component,OnInit } from '@angular/core';
import { Corruption } from '../corruption';
import { CorruptionService } from '../corruption.service';
@Component({
  selector: 'app-viewtasks',
  templateUrl: './viewtasks.component.html',
  styleUrls: ['./viewtasks.component.css']
})
export class ViewtasksComponent {
  constructor(private corruption:CorruptionService){}

  slst:any=[];
  model:any={};
  alst:any=[];
  errormessage:string="";

  ngOnInit(): void {
    debugger;
 const did=sessionStorage.getItem("UserId");
    this.corruption.getCorruptionTasks()
    .subscribe({
      next:(data)=>{
        this.slst=data.filter((item)=>item.department.did==did && item.status=="Alloted");
      }
    })
  }

  isFlag:boolean=false;
  view(lst:Corruption)
  {
        debugger;
        this.model=Object.assign({},lst);
        this.corruption.getAllotedTasks()
        .subscribe({
          next:(data)=>{
            this.isFlag=true;
            this.alst=data.filter((item)=>item.cid==this.model.cid);  
          }
        })
  }

  

  update(lst:any)
  {
    debugger;
    this.corruption.UpdateStatus(lst)
    .subscribe({
      next:(data)=>{
     
        alert("Status Updated");
        this.isFlag=false;
      },
      error:(err)=>{
        alert("error")
      }
    })
  }
}
