import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FavouriteList } from "./components/favourite-list/favourite-list";
import { MealListComponent } from "./components/meal-list/meal-list";
import { SmartMeal } from "./components/smart-meal/smart-meal";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FavouriteList, MealListComponent, SmartMeal],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
