import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DepartmentComponent } from './department/department.component';
import { PublicComponent } from './public/public.component';
import { RegisterComponent } from './register/register.component';
import { ManagecorruptionComponent } from './managecorruption/managecorruption.component';
import { TakeactionComponent } from './takeaction/takeaction.component';
import { ManagepublicComponent } from './managepublic/managepublic.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { AdddeptComponent } from './adddept/adddept.component';
import { DprofileupdateComponent } from './dprofileupdate/dprofileupdate.component';
import { DpasswordupdateComponent } from './dpasswordupdate/dpasswordupdate.component';
import { ViewtasksComponent } from './viewtasks/viewtasks.component';
import { PprofileupdateComponent } from './pprofileupdate/pprofileupdate.component';
import { PpasswordupdateComponent } from './ppasswordupdate/ppasswordupdate.component';
import { PostcorruptionComponent } from './postcorruption/postcorruption.component';
import { PostfeedbackComponent } from './postfeedback/postfeedback.component';
import { CheckstatusComponent } from './checkstatus/checkstatus.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    DepartmentComponent,
    PublicComponent,
    RegisterComponent,
    ManagecorruptionComponent,
    TakeactionComponent,
    ManagepublicComponent,
    ViewfeedbackComponent,
    AdddeptComponent,
    DprofileupdateComponent,
    DpasswordupdateComponent,
    ViewtasksComponent,
    PprofileupdateComponent,
    PpasswordupdateComponent,
    PostcorruptionComponent,
    PostfeedbackComponent,
    CheckstatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
