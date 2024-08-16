import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/environment.development';
import { AcademicModel } from 'src/Model/AcademicCalender.Model';
import { AcademicYear } from 'src/Model/Academicyear.Model';

@Injectable({
  providedIn: 'root'
})
export class AcademicyearService {

 
  baseApiUrl: string = environment.baseapiUrl;

  constructor(private http :HttpClient) {
    
  }

  getAllaAcademicYear():Observable<AcademicYear[]>{
    return this.http.get<AcademicYear[]>(this.baseApiUrl + 'api/AcademicYear');
  }
  
  creategetAllAcademicYear(academicyr: AcademicYear): Observable<any> {
    return this.http.post<any>(`${this.baseApiUrl}api/AcademicYear`, academicyr);
  }
}
