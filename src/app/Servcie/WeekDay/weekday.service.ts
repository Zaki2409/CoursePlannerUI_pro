import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/environment.development';
import { Weekday } from 'src/Model/Weeday.Mdel';

@Injectable({
  providedIn: 'root'
})
export class WeekdayService {

  baseApiUrl: string = environment.baseapiUrl;

  constructor(private http :HttpClient) {
    
  }

  getAllweek():Observable<Weekday[]>{
    return this.http.get<Weekday[]>(this.baseApiUrl + 'api/WeekDay');
  }
  
  createhl(weekda: Weekday): Observable<any> {
    return this.http.post<any>(`${this.baseApiUrl}api/WeekDay`, weekda);
  }
}
