import { Component } from '@angular/core';
import { filter } from 'rxjs-compat/operator/filter';
import { observeNotification } from 'rxjs/internal/Notification';
import { Corruption } from '../corruption';
import { CorruptionService } from '../corruption.service';
@Component({
  selector: 'app-managecorruption',
  templateUrl: './managecorruption.component.html',
  styleUrls: ['./managecorruption.component.css']
})
export class ManagecorruptionComponent {
  constructor(private corruption: CorruptionService) { }
  slst: any = [];
  dslst: any = [];
  clst: any = [];
  model: any = {};
  current=null

  errormessage:string=""
  isupdate=false
  isdept=false
  ngOnInit(): void {
    debugger;
    this.corruption.getDepartment()
      .subscribe({
        next: (data) => {
          this.slst = data as any[];
        }
      })
  }

  get()
  {
    debugger
    this.corruption.getDepartment()
    .subscribe({
      next: (data) => {
        this.slst = data as any[];
        this.dslst=this.slst.filter((item) => item.did == this.current);
      }
    })
   
    this.isdept=true
    this.isupdate=false
    console.log(this.dslst)
  }

  update(lst:Corruption)
  {
     debugger;
     this.model={...lst}
     this.isupdate=true
     this.isdept=false
     this.isFlag=false
  }

  onUpdate()
  {
    debugger;
   
    this.corruption.UpdateDeptProfile(this.model)
    .subscribe({
      next:(data)=>{
       
        alert(data)
        this.model.DeptName=""
        this.model.PhoneNo=""
        this.model.Address=""
      }
    })
  }

  onDelete(lst:Corruption)
  {
    debugger;
    this.model=Object.assign({},lst)
    this.corruption.DeleteDept(this.model)
    .subscribe({
      next:(data)=>{
        this.errormessage=data.Message
        alert(data.Message)
      }
    })
  }
  isFlag: boolean = false;

  view(lst: Corruption) {
    debugger;
    this.model = {...lst}
    this.isFlag = true;
    this.corruption.getCorruptedDept()
      .subscribe({
        next: (data) => {
          this.isFlag = true;
          this.clst = data.filter((item: any) => item.department.did==this.model.did );
        },
        error:(err)=>{
          alert("error")
        }
      })
  }
 
}
