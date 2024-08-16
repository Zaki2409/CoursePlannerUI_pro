import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/environment.development';
import { Department } from 'src/Model/Department.Model';
import { HolidayList } from 'src/Model/HolidayList.Model';

@Injectable({
  providedIn: 'root'
})
export class HolidaylistService {

  baseApiUrl: string = environment.baseapiUrl;

  constructor(private http :HttpClient) {
    
  }

  getAllhl():Observable<HolidayList[]>{
    return this.http.get<HolidayList[]>(this.baseApiUrl + 'api/HolidayList');
  }
  
  createhl(holidaylist: HolidayList): Observable<any> {
    return this.http.post<any>(`${this.baseApiUrl}api/HolidayList`, holidaylist);
  }
}
