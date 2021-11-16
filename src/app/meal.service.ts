import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Meal } from './meal';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<Meal[]> {
    return this.http.get<Meal[]>('http://localhost:3000/meals');
  }

  create(meal: Meal): Observable<Meal> {
    return this.http.post<Meal>(
      'http://localhost:3000/meals',
      JSON.stringify(meal),
      this.options
    );
  }
}
