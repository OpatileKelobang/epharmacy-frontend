import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pharmacy } from '../common/pharmacy';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  private baseUrl = 'https://epharmacy-sa.herokuapp.com/api/pharmacies';

  constructor(private httpClient: HttpClient) { }

  public getPharmacyList(): Observable<Pharmacy[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.pharmacies)
    );
  }
}

interface GetResponse {
  _embedded: {
    pharmacies: Pharmacy[];
  }
}
