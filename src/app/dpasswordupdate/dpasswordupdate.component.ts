import { Component } from '@angular/core';
import { Corruption } from '../corruption';
import { CorruptionService } from '../corruption.service';

@Component({
  selector: 'app-dpasswordupdate',
  templateUrl: './dpasswordupdate.component.html',
  styleUrls: ['./dpasswordupdate.component.css']
})
export class DpasswordupdateComponent {
  constructor(private corruption:CorruptionService) { 
    
  }
    
  model:any={};


  ngOnInit(): void {
  }
  OnSubmit()
  {
    
 const id=sessionStorage.getItem("UserId");
      this.corruption.UpdateDeptPassword(this.model,id)
      .subscribe({
        next:(data)=>{
     alert(data)
          this.model.password="";
        },
        error:(err)=>{
          alert("error")
        }
      })
   }
   
  
}
