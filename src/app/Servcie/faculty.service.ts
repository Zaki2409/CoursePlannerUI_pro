import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/environment.development';
import { Faculty } from 'src/Model/Faculty.Model';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

 

  baseApiUrl: string = environment.baseapiUrl;

 
  constructor(private http :HttpClient) {
    
  }
  getAllfaculty():Observable<Faculty[]>{
    return this.http.get<Faculty[]>(this.baseApiUrl + 'api/Faculty');
  }
  

  authenticate(loginName: string, loginPassword: string): Observable<Faculty> {
    
    return this.http.post<Faculty>(this.baseApiUrl + 'api/Faculty/login', { loginName, loginPassword });
  }
  
  registerFaculty(faculty: Faculty): Observable<any> {
    return this.http.post<any>(`${this.baseApiUrl}api/Faculty/RegisterFaculty`, faculty);
  }
  getEmployeeByUid(uid: string): Observable<Faculty> {
    return this.http.get<Faculty>(`${this.baseApiUrl}api/Faculty/${uid}`);
  }

  updateEmployeeByUid(uid: string, faculty: Faculty): Observable<Faculty> {
    return this.http.put<Faculty>(`${this.baseApiUrl}api/Faculty/${uid}`, faculty);
  }

  deleteEmployeeByUid(uid: string): Observable<void> {
    return this.http.delete<void>(`${this.baseApiUrl}api/Faculty/${uid}`);
  }
}
