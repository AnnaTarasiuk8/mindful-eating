import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Affirmation } from './affirmation';

@Injectable({
  providedIn: 'root',
})
export class AffirmationsService {
  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  constructor(private http: HttpClient) {}

  get(): Observable<Affirmation[]> {
    return this.http.get<Affirmation[]>(
      'https://dulce-affirmations-api.herokuapp.com/affirmation'
    );
  }
}
