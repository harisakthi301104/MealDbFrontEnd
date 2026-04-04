import { Component } from '@angular/core';
import { Meal, MealService } from '../../../services/mealservice';

@Component({
  selector: 'app-smart-meal',
  imports: [],
  templateUrl: './smart-meal.html',
  styleUrl: './smart-meal.css',
})
export class SmartMeal {
    easiestMeal: Meal | null = null;

  constructor(private mealService: MealService) {}

  findEasiestMeal() {
    this.mealService.getEasiestMeal().subscribe(data => {
      this.easiestMeal = data;
    });
  }

}
