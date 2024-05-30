import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Corruption } from '../corruption';
import { CorruptionService } from '../corruption.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private corruption:CorruptionService,private router:Router) { 
    
  }
    
  model:any={};
  errormessage:string="";
  isPId=false
  isPassword=false
  pname=false
  isPhoneNo=false
  isAddress=false

  ngOnInit(): void {
  }
  OnSubmit()
  {
    debugger;
   
    this.corruption.register(this.model)
    .subscribe({
      next:(data)=>{
        alert(data)
        this.model.pname="";
        this.model.email="";
        this.model.password="";
        this.model.phone="";
        this.model.address="";
      },
      error:(err)=>{
        alert("error")
      }
    })
  

  }

  back(){
    this.router.navigate(['/'])
  }
}
