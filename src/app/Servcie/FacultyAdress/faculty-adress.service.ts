
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/environment.development';
import { Faculty } from 'src/Model/Faculty.Model';
import { Address } from 'src/Model/FacultyAdress.Model';

@Injectable({
  providedIn: 'root'
})
export class FacultyAdressService {

  baseApiUrl: string = environment.baseapiUrl;

  constructor(private http: HttpClient) {}

  getAllAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(this.baseApiUrl +'api/FacultyAddress');
  }

  getAddressById(uid: string): Observable<Address> {
    return this.http.get<Address>(`${this.baseApiUrl}api/FacultyAddress/${uid}`);
  }


  createAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(this.baseApiUrl +'api/FacultyAddress', address);
  }

  
  updateAddress(uid: string, address: Address): Observable<Address> {
    return this.http.put<Address>(this.baseApiUrl + 'api/FacultyAddress/${uid}', address);
  }

  deleteAddress(uid: string): Observable<void> {
    return this.http.delete<void>(this.baseApiUrl + 'api/FacultyAddress/${uid}');
  }
  registerFaculty(faculty: Faculty): Observable<any> {
    return this.http.post<any>(`${this.baseApiUrl}api/Faculty/RegisterFaculty`, faculty);
  }

  updateEmployeeByUid(uid: string, faculty: Faculty): Observable<Faculty> {
    return this.http.put<Faculty>(`${this.baseApiUrl}api/Faculty/${uid}`, faculty);
  }
 
}
