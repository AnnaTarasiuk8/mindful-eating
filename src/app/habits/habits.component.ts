import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Meal } from '../meal';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css'],
})
export class HabitsComponent implements OnInit {
  meals: Meal[] = [];
  faPlus = faPlus;

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.getMeals();
  }

  getMeals(): void {
    this.mealService.getAll().subscribe((meals) => (this.meals = meals));
  }
}
