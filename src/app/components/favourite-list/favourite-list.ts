import { Component } from '@angular/core';
import { FavoriteMeal, FavoriteService } from '../../../services/favourite-service';

@Component({
  selector: 'app-favourite-list',
  imports: [],
  templateUrl: './favourite-list.html',
  styleUrl: './favourite-list.css',
})
export class FavouriteList {
   favorites: FavoriteMeal[] = [];
  userId = 'user1'; // replace with JWT later

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favoriteService.getFavorites(this.userId).subscribe(data => {
      this.favorites = data;
    });
  }

  remove(id: number) {
    this.favoriteService.removeFavorite(id).subscribe(() => {
      this.loadFavorites();
    });
  }

}
