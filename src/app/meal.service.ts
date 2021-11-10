import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Meal } from './meal';
import { MEALS } from './mock-meals';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  constructor() {}

  getMeals(): Observable<Meal[]> {
    const meals = of(MEALS);

    return meals;
  }
}
