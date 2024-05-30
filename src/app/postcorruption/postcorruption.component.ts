import { Component,OnInit,ViewChild } from '@angular/core';
import { Corruption } from '../corruption';
import { CorruptionService } from '../corruption.service';

@Component({
  selector: 'app-postcorruption',
  templateUrl: './postcorruption.component.html',
  styleUrls: ['./postcorruption.component.css']
})

export class PostcorruptionComponent {
  constructor(private corruption:CorruptionService){}
  @ViewChild('fileInput') fileInput: any;
  
  model:any={};
  errormessage:string="";
  current=null;
  dlist:any=[];
  myFile: string[] = [];
  progress: number = 0;
  isSelect=false;
  
  ngOnInit(): void {
    debugger;
    
    this.corruption.getDepartment()
    .subscribe({
      next:(data)=>{
        this.dlist=data as any[];
      }
    })
  }

  getFile(e: any) {
    const file = e.target.files[0];
    this.model.filename = file.name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.model.file = reader.result as string;
    };
  }
  
  UploadFile() {
   const pid = sessionStorage.getItem("UserId");
   
    this.corruption.UploadFile(this.model,pid,this.model.did)
      .subscribe({
        next: (data) => {
          alert(data);
         
          this.model.did = null;
          this.model.description=""
        },
        error:(err)=>{
          alert("error")
        }
      });
  }
  
  
}
  
