import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { from,Observable } from 'rxjs';
import { Corruption } from './corruption';

const baseurl='http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class CorruptionService {

  constructor(private http:HttpClient) { }

  loginverify(data:any):Observable<any>
  {
    debugger;
    return this.http.post(baseurl+'/LoginVerify',data,{responseType:'text'});
  }
  AddDept(data:any):Observable<any>
  {
    debugger;
    return this.http.post(baseurl+'/Adddept',data,{responseType:'text'});
  }
  UpdateDeptProfile(data:any):Observable<any>
  {
    debugger;
    return this.http.put(baseurl+'/updatedeptprofile',data,{responseType:'text'});
  }
  UpdateDeptPassword(data:any,id:any):Observable<any>
  {
    debugger;
    return this.http.put(baseurl+`/updatedeptpassword/${id}`,data,{responseType:'text'});
  }
  register(data:any):Observable<any>
  {
    debugger;
    return this.http.post(baseurl+'/Adduser',data,{responseType:'text'});
  }
  UpdatePublicPassword(data:any,id:any):Observable<any>
  {
    debugger;
    return this.http.put(baseurl+`/updateuserpassword/${id}`,data,{responseType:'text'});
  }
  UpdatePublicProfile(data:any,id:any):Observable<any>
  {
    debugger;
    return this.http.put(baseurl+`/updateuserprofile/${id}`,data,{responseType:'text'});
  }
  PostFeedback(data:any,id:any):Observable<any>
  {
    debugger;
    return this.http.post(baseurl+`/addfeedback/${id}`,data,{responseType:'text'});
  }
  getFeedback():Observable<any>
  {
    debugger;
    return this.http.get(baseurl+'/getfeedback');
  }
  getDepartment():Observable<any>
  {
    debugger;
    return this.http.get(baseurl+'/getdept');
  }
  getPublic():Observable<any>
  {
    debugger;
    return this.http.get(baseurl+'/getusers');

  }

  Getpublicbyid(id:any):Observable<any>
  {
    debugger
    return this.http.get(baseurl+`/getusersbyid/${id}`)
  }
  corruptiondetails(data:any):Observable<any>
  {
    debugger;
    return this.http.post(baseurl+'/corruptiondetails',data);
  }
  getCorruptionStatus():Observable<any>
  {
    debugger;
    return this.http.get(baseurl+'/getcorruption');
  }
  TakeAction():Observable<any>
  {
    debugger;
    return this.http.get(baseurl+'/getcorruption');
  }
  UpdateStatus(id:any):Observable<any>
  {
    debugger;
    return this.http.put(baseurl+`/Updatedeptstatus/${id}`,'',{responseType:'text'});
  }
  AllotCrime(id:any):Observable<any>
  {
    debugger;
    return this.http.put(baseurl+`/Updatestatus/${id}`,'',{responseType:'text'});
  }
  getCorruptionTasks():Observable<any>
  {
    debugger;
    return this.http.get(baseurl+'/getcorruption');
  }
  corrupt(data:any):Observable<any>
  {
    debugger;
    return this.http.post(baseurl+'/corrupt',data);
  }
  getCorruptedDept():Observable<any>
  {
    debugger;
    return this.http.get(baseurl+'/getcorruption');
  }
  getAllotedTasks():Observable<any>
  {
    debugger;
    return this.http.get(baseurl+'/getcorruption');
  }
  UploadFile(data:any,id:any,did:any):Observable<any>
{
  debugger;
  return this.http.post(baseurl+`/postcorruption/${id}/${did}`,data,{responseType:'text'});
}

DeleteDept(id:any):Observable<any>
{
  debugger;
  return this.http.delete(baseurl+`/deletedept/${id}`,{responseType:'text'});
}



}
