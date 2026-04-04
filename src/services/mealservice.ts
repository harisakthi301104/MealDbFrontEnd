import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ingredient {
  id: number;
  name: string;
}

export interface Meal {
  id: number;
  name: string;
  category: string;
  area: string;
  instructions: string;
  thumbnail: string;
  ingredients: Ingredient[];
}

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private apiUrl = 'http://localhost:5000/api/meal';

  constructor(private http: HttpClient) {}

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.apiUrl);
  }

  getEasiestMeal(): Observable<Meal> {
    return this.http.get<Meal>(`${this.apiUrl}/easiest`);
  }
}