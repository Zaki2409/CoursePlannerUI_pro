import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/environment.development';
import { Department } from 'src/Model/Department.Model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseApiUrl: string = environment.baseapiUrl;

  constructor(private http :HttpClient) {
    
  }

  getAllCourse():Observable<Department[]>{
    return this.http.get<Department[]>(this.baseApiUrl + 'api/Department');
  }
  
  createcourse(course: Department): Observable<any> {
    return this.http.post<any>(`${this.baseApiUrl}api/Department`, course);
  }
}
