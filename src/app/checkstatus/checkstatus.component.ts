import { Component } from '@angular/core';
import { Corruption } from '../corruption';
import { CorruptionService } from '../corruption.service';
@Component({
  selector: 'app-checkstatus',
  templateUrl: './checkstatus.component.html',
  styleUrls: ['./checkstatus.component.css']
})
export class CheckstatusComponent {
  constructor(private corruption:CorruptionService){}
  model:any={};
  slst:any=[];
  ngOnInit(): void {
    debugger;
    const pid=sessionStorage.getItem("UserId");
  
    this.corruption.getCorruptionStatus()
    .subscribe({
      next:(data)=>{
        this.slst=data.filter((item)=>item.user.pid==pid);
  },
  error:(err)=>{
    alert("error")
  }
})


}
}