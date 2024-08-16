import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/environment.development';
import { AcademicModel } from 'src/Model/AcademicCalender.Model';
import { Course } from 'src/Model/Course.Model';

@Injectable({
  providedIn: 'root'
})
export class AcademicCalenderService {

  baseApiUrl: string = environment.baseapiUrl;

  constructor(private http :HttpClient) {
    
  }

  getAllacademiccalender():Observable<AcademicModel[]>{
    return this.http.get<AcademicModel[]>(this.baseApiUrl + 'api/AcademicCalender');
  }
  
  creategetAllacademiccalender(academic: AcademicModel): Observable<any> {
    return this.http.post<any>(`${this.baseApiUrl}api/AcademicCalender`, academic);
  }
}
