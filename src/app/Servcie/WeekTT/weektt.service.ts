import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/environment.development';
import { WeekTTable } from 'src/Model/FacultyWeekTimeTable.Model';
import { Semester } from 'src/Model/Semester.Model';
import { WeekTT } from 'src/Model/WeekTt.Model';

@Injectable({
  providedIn: 'root'
})
export class WeekttService {

  baseApiUrl: string = environment.baseapiUrl;

  constructor(private http :HttpClient) {
    
  }

  getAllWeekTT():Observable<WeekTT[]>{
    return this.http.get<WeekTT[]>(this.baseApiUrl + 'api/Semester');
  }
  
  createWeekTT(weektt: WeekTT): Observable<any> {
    return this.http.post<any>(`${this.baseApiUrl}api/FacultyWeekTt`, weektt);
  }

  getWeekTTByUserUid(userUid: string): Observable<WeekTT[]> {
    return this.http.get<WeekTT[]>(`${this.baseApiUrl}api/FacultyWeekTt?userUid=${userUid}`);
  }

  getAllweektimetable(userUid: string): Observable<WeekTTable[]> {
    // Use userUid in the URL path
    return this.http.get<WeekTTable[]>(`${this.baseApiUrl}api/FacultyWeekTt/GetClassTimeSlotDetails/${userUid}`);
  }
}
