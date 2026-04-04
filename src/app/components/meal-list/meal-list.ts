import { Component, OnInit } from '@angular/core';
import { Meal, MealService } from '../../../services/mealservice';

@Component({
  selector: 'app-meal-list',
  imports: [],
  templateUrl: './meal-list.html',
  styleUrl: './meal-list.css',
})
export class MealListComponent implements OnInit {

  meals: Meal[] = [];
  loading = true;

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.mealService.getMeals().subscribe(data => {
      this.meals = data;
      this.loading = false;
    });
  }
}
