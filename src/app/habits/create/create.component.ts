import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { MealService } from 'src/app/meal.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  error?: String;

  mealForm: FormGroup = this.formBuilder.group({
    type: [''],
    foodGroup: [''],
    name: [''],
    quantity: [''],
    notes: [''],
  });

  ngOnInit() {}

  constructor(
    public formBuilder: FormBuilder,
    public mealService: MealService,
    private router: Router
  ) {}

  submitForm() {
    this.mealService.create(this.mealForm.value).subscribe(
      (meal) => {
        this.router.navigateByUrl('/habits');
      },
      (error) => {
        this.error = 'Unable to create the meal. Please try again.';
      }
    );
  }
}
