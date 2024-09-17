import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/environment.development';
import { AcademicClass } from 'src/Model/AcademicClass.Model';
import { AcademicYear } from 'src/Model/Academicyear.Model';
import { LINQacademicclass } from 'src/Model/LinqAcademicClass.Model';

@Injectable({
  providedIn: 'root'
})
export class AcadmicclassService {

  baseApiUrl: string = environment.baseapiUrl;

  constructor(private http :HttpClient) {
    
  }

  getAllaAcademicYear():Observable<AcademicClass[]>{
    return this.http.get<AcademicClass[]>(this.baseApiUrl + 'api/AcademicClass');
  }
  
  creategetAllAcademicYear(academicyr: AcademicYear): Observable<any> {
    return this.http.post<any>(`${this.baseApiUrl}api/AcademicYear`, academicyr);
  }


  getacademicclasslinq(userUid: string): Observable<LINQacademicclass[]> {
    // Use userUid in the URL path
    return this.http.get<LINQacademicclass[]>(`${this.baseApiUrl}api/AcademicClass/GetAll/${userUid}`);
  }
}
