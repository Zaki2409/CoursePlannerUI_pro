import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/environment.development';
import { Course } from 'src/Model/Course.Model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseApiUrl: string = environment.baseapiUrl;

  constructor(private http :HttpClient) {
    
  }

  getAllCourse():Observable<Course[]>{
    return this.http.get<Course[]>(this.baseApiUrl + 'api/Course');
  }
  
  createcourse(course: Course): Observable<any> {
    return this.http.post<any>(`${this.baseApiUrl}api/Course`, course);
  }

}
