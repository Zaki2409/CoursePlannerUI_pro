import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/environment.development';
import { Course } from 'src/Model/Course.Model';
import { Lesson } from 'src/Model/Lesson.Model';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  baseApiUrl: string = environment.baseapiUrl;

  constructor(private http :HttpClient) {
    
  }

  getAllLesson():Observable<Lesson[]>{
    return this.http.get<Lesson[]>(this.baseApiUrl + 'api/Lesson');
  }
  
  createLesson(Lesson: Lesson): Observable<any> {
    return this.http.post<any>(`${this.baseApiUrl}api/Lesson`, Lesson);
  }
}
