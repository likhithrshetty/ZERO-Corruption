import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddeptComponent } from './adddept/adddept.component';
import { AdminComponent } from './admin/admin.component';
import { CheckstatusComponent } from './checkstatus/checkstatus.component';
import { DepartmentComponent } from './department/department.component';
import { DpasswordupdateComponent } from './dpasswordupdate/dpasswordupdate.component';
import { DprofileupdateComponent } from './dprofileupdate/dprofileupdate.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagecorruptionComponent } from './managecorruption/managecorruption.component';
import { ManagepublicComponent } from './managepublic/managepublic.component';
import { PostcorruptionComponent } from './postcorruption/postcorruption.component';
import { PostfeedbackComponent } from './postfeedback/postfeedback.component';
import { PpasswordupdateComponent } from './ppasswordupdate/ppasswordupdate.component';
import { PprofileupdateComponent } from './pprofileupdate/pprofileupdate.component';
import { PublicComponent } from './public/public.component';
import { RegisterComponent } from './register/register.component';
import { TakeactionComponent } from './takeaction/takeaction.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { ViewtasksComponent } from './viewtasks/viewtasks.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin',component:AdminComponent,
  children:[
    {path:'adddept',component:AdddeptComponent},
    {path:'managecorruption',component:ManagecorruptionComponent},
    {path:'takeaction',component:TakeactionComponent},
    {path:'managepublic',component:ManagepublicComponent},
    {path:'viewfeedback',component:ViewfeedbackComponent}
  ]
},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'department',component:DepartmentComponent,
  children:[
    {path:'dprofileupdate',component:DprofileupdateComponent},
    {path:'dpasswordupdate',component:DpasswordupdateComponent},
    {path:'viewtasks',component:ViewtasksComponent}
  ]  
},
  {path:'public',component:PublicComponent,
  children:[
    {path:'pprofileupdate',component:PprofileupdateComponent},
    {path:'ppasswordupdate',component:PpasswordupdateComponent},
    {path:'postcorruption',component:PostcorruptionComponent},
    {path:'checkstatus',component:CheckstatusComponent},
    {path:'postfeedback',component:PostfeedbackComponent}
  ]  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
