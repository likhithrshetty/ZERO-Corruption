import { Component } from '@angular/core';
import { Corruption } from '../corruption';
import { CorruptionService } from '../corruption.service';
@Component({
  selector: 'app-ppasswordupdate',
  templateUrl: './ppasswordupdate.component.html',
  styleUrls: ['./ppasswordupdate.component.css']
})
export class PpasswordupdateComponent {
  constructor(private corruption: CorruptionService) {

  }

  model: any = {};


  ngOnInit(): void {
  }
  OnSubmit() {
    debugger;
  
const PId = sessionStorage.getItem("UserId");

      this.corruption.UpdatePublicPassword(this.model,PId)
        .subscribe({
          next: (data) => {
           alert(data)
            this.model.password = "";
          },
          error:(err)=>{
            alert("error")
          }
        })
    }
  
}
