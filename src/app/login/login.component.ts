import { Component } from '@angular/core';
import { Corruption } from '../corruption';
import { CorruptionService } from '../corruption.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private corruption: CorruptionService, private router: Router, ) {

  }

  model: any = {};
  errormessage: string = "";
  current = 1;
  ulist: any = [
    { Userid: 1, name: "--select--" },
    { Userid: 2, name: "Admin" },
    { Userid: 3, name: "Department" },
    { Userid: 4, name: "Public" },

  ];
  isUserType = false
  isvalidUserId = false
  isvalidPassword = false


  ngOnInit(): void {
  }
  onSubmit() {
    debugger;

    if (this.current == 2) {
      this.model.usertype = "Admin";

    }
    else if (this.current == 3) {
      this.model.usertype = "Department";
    }
    else if (this.current == 4) {
      this.model.usertype = "Public";
    }
    sessionStorage.setItem("UserId", this.model.id);

    if (this.current == 1) {
      this.isUserType = true
    }
    else if (this.model.id == undefined || this.model.id == "") {
      this.isvalidUserId = true
    }
    else if (this.model.password == undefined || this.model.password == "") {
      this.isvalidPassword = true
    }
    else {
      this.corruption.loginverify(this.model)
        .subscribe({
          next: (data) => {
            alert("Login Successfully")
              if (this.current == 2) {
             
                this.router.navigate(['/admin/adddept']);
              }
              else if (this.current == 3) {
               
                this.router.navigate(['/department/viewtasks']);
              }
              else if (this.current == 4) {
               
                this.router.navigate(['/public/postcorruption']);
              }
            
            else {
              alert("Incorrect Credentials")
            
            }
            
          },
         
          error:(err)=>{
            alert("Incorrect Credentials")
          }
        })
       
    }



  }

  back(){
    this.router.navigate(['/'])
  }
}
