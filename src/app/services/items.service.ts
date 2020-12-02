import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../common/item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private baseUrl = 'https://epharmacy-sa.herokuapp.com/api/items';

  constructor(private httpClient: HttpClient) { }

  public getItemsList(): Observable<Item[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.items)
    );
  }
}

interface GetResponse {
  _embedded: {
    items: Item[];
  }
}
