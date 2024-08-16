import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/environment.development';
import { AcademicModel } from 'src/Model/AcademicCalender.Model';
import { Class } from 'src/Model/Class.Model';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

 
  baseApiUrl: string = environment.baseapiUrl;

  constructor(private http :HttpClient) {
    
  }

  getAllClass():Observable<Class[]>{
    return this.http.get<Class[]>(this.baseApiUrl + 'api/Class');
  }
  
  creategetClass(academic: Class): Observable<any> {
    return this.http.post<any>(`${this.baseApiUrl}api/Class`, academic);
  }
}
