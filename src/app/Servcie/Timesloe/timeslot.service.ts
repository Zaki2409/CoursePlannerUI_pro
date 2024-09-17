import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/environment.development';
import { AcademicClass } from 'src/Model/AcademicClass.Model';
import { AcademicYear } from 'src/Model/Academicyear.Model';
import { TimeSlot } from 'src/Model/Timeslot.Model';

@Injectable({
  providedIn: 'root'
})
export class TimeslotService {

  baseApiUrl: string = environment.baseapiUrl;

  constructor(private http :HttpClient) {
    
  }

  getAlltiomeslot():Observable<TimeSlot[]>{
    return this.http.get<TimeSlot[]>(this.baseApiUrl + 'api/TimeSlot');
  }
  
  creategetAllAcademicYear(academicyr: AcademicYear): Observable<any> {
    return this.http.post<any>(`${this.baseApiUrl}api/AcademicYear`, academicyr);
  }
}
