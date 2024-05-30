import { Component } from '@angular/core';
import { Corruption } from '../corruption';
import { CorruptionService } from '../corruption.service';
@Component({
  selector: 'app-pprofileupdate',
  templateUrl: './pprofileupdate.component.html',
  styleUrls: ['./pprofileupdate.component.css']
})
export class PprofileupdateComponent {
constructor(private corruption:CorruptionService){}
model:any={};


ngOnInit(): void {
  this.getusersbyid()
}

OnSubmit()
{
  debugger;

  const PId=sessionStorage.getItem("UserId");
  
  this.corruption.UpdatePublicProfile(this.model,PId)
  .subscribe({
    next:(data)=>{
   alert(data)
      this.model.pname="";
      this.model.email="";
      this.model.address="";
      this.model.phone="";
      this.getusersbyid()
    }
  })


}

  getusersbyid()

  {
    debugger
    const id=sessionStorage.getItem("UserId")
    this.corruption.Getpublicbyid(id)
      .subscribe({
        next: (data) => {
          console.log(data)
          this.model.pname=data.pname
          this.model.email=data.email
          this.model.address=data.address
          this.model.phone=data.phone
        },
        error:(err)=>{
          alert("error")
        }
      })
  }
}