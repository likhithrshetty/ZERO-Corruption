import { Component } from '@angular/core';
import { Corruption } from '../corruption';
import { CorruptionService } from '../corruption.service';
@Component({
  selector: 'app-managepublic',
  templateUrl: './managepublic.component.html',
  styleUrls: ['./managepublic.component.css']
})
export class ManagepublicComponent {
  constructor(private corruption:CorruptionService){}
  slst:any=[];
  ngOnInit(): void {
    debugger;
    this.corruption.getPublic()
    .subscribe({
      next:(data)=>{
        this.slst=data as any[];
      },
      error:(err)=>{
        alert("error")
      }
    })

  }

}
