import { Component } from '@angular/core';
import { Corruption } from '../corruption';
import { CorruptionService } from '../corruption.service';

@Component({
  selector: 'app-adddept',
  templateUrl: './adddept.component.html',
  styleUrls: ['./adddept.component.css']
})
export class AdddeptComponent {
  constructor(private corruption:CorruptionService) { 
    
  }
    
  model:any={};
  errormessage:string="";
  slst:any=[]

  isUserId=false
  isPassword=false
  isName=false
  isPhone=false
  isAddress=false

  ngOnInit(): void {

    debugger;
   
  }
  OnSubmit()
  {
    debugger;
 
   if(this.model.password==undefined || this.model.password=="")
    {
          this.isPassword=true
    }
    else if(this.model.dname==undefined || this.model.dname=="")
    {
          this.isName=true
    }
    else if(this.model.phone==undefined || this.model.phone=="")
    {
          this.isPhone=true
    }
    else if(this.model.address==undefined || this.model.address=="")
    {
          this.isAddress=true
    }
    else
    {
      this.corruption.AddDept(this.model)
      .subscribe({
        next:(data)=>{
         alert(data)
          this.model.dname="";
          this.model.password="";
          this.model.phone="";
          this.model.address="";

          this.getdept()
        }
      })
    }
    

  }

  getdept()
  {
    this.corruption.getDepartment()
    .subscribe({
      next: (data) => {
        this.slst = data as any[];
      }
    })
  }

  deletedept(lst:any)
  {
    this.corruption.DeleteDept(lst)
    .subscribe({
      next:(data)=>{
        alert(data)
        this.getdept()
      },
      error:(err)=>{
        alert("error")
      }
    })
    
  }

}


