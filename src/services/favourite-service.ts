import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FavoriteMeal {
  id: number;
  userId: string;
  mealId: number;
  meal: any;
}

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private apiUrl = 'http://localhost:5000/api/favorite';

  constructor(private http: HttpClient) {}

  getFavorites(userId: string): Observable<FavoriteMeal[]> {
    return this.http.get<FavoriteMeal[]>(`${this.apiUrl}/user/${userId}`);
  }

  addFavorite(fav: FavoriteMeal): Observable<FavoriteMeal> {
    return this.http.post<FavoriteMeal>(this.apiUrl, fav);
  }

  removeFavorite(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}