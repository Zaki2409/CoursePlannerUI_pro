import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/environment.development';
import { AcademicModel } from 'src/Model/AcademicCalender.Model';
import { Semester } from 'src/Model/Semester.Model';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {

 
  baseApiUrl: string = environment.baseapiUrl;

  constructor(private http :HttpClient) {
    
  }

  getAllSemester():Observable<Semester[]>{
    return this.http.get<Semester[]>(this.baseApiUrl + 'api/Semester');
  }
  
  createSemester(semester: Semester): Observable<any> {
    return this.http.post<any>(`${this.baseApiUrl}api/Semester`, semester);
  }
}
