import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  private baseUrl = 'http://localhost:8080/pharmacies/';

  constructor(private httpClient: HttpClient) { }

  public getPharmacyList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  public createPharmacy(pharmacy: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}create`, pharmacy);
  }

}
