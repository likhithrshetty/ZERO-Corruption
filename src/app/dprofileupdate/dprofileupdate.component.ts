import { Component } from '@angular/core';
import { Corruption } from '../corruption';
import { CorruptionService } from '../corruption.service';

@Component({
  selector: 'app-dprofileupdate',
  templateUrl: './dprofileupdate.component.html',
  styleUrls: ['./dprofileupdate.component.css']
})
export class DprofileupdateComponent {

 constructor(private corruption:CorruptionService) { 
    
  }
    
  model:any={};
  errormessage:string="";
  array:any=[]

  ngOnInit(): void {
  
    this.getdepartments()
  }
  OnSubmit()
  {
    debugger;
   
     this.model.did=sessionStorage.getItem("UserId");

      this.corruption.UpdateDeptProfile(this.model)
      .subscribe({
        next:(data)=>{
       alert(data)
          this.model.dname="";
          this.model.phone="";
          this.model.address="";
          this.model.email="";

         this.getdepartments()
        },
        error:(err)=>{
          alert("error")
        }
      })
    
    
  }

  getdepartments()
  {
    const did=sessionStorage.getItem("UserId");
    this.corruption.getDepartment()
    .subscribe({
      next: (data) => {
        this.array = data.filter((item) => item.did== did);
   
        this.model.dname = this.array[0].dname;
        this.model.email = this.array[0].email;
        this.model.phone = this.array[0].phone;
        this.model.address = this.array[0].address;
      }
    })
  }

}
