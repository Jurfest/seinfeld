import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { QuotesEntity } from './+state/quotes.models';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private API_URL = 'https://seinfeld-quotes.herokuapp.com';

  constructor(private http: HttpClient) {}

  getAll(): Observable<QuotesEntity[]> {
    return this.http
      .get<{ quotes: QuotesEntity[] }>(`${this.API_URL}/quotes`)
      .pipe(
        map((response) => {
          return response.quotes.map((quote, index) => {
            return {
              id: index,
              ...quote,
            };
          });
        })
      );
  }
}
