import { tap } from 'rxjs';
import { Login } from './login/login';
import { Register } from './register/register';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(private http: HttpClient) { }

  private apiUrl = 'https://localhost:7039/api/auth';

  getroles() {
    const token = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.roles || [];
    }
  }

  Login(data: Login) {
    return this.http.post(`${this.apiUrl}/Login`, data, { responseType: 'text' }).pipe(
      // Handle the response and store the token
      tap((response: string) => {
        localStorage.setItem('token', response);
      })
    );
  }

  Register(data: Register) {
    return this.http.post(`${this.apiUrl}/Register`, data) ;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isloggedIn(): boolean {
    return !!this.getToken();
  }

  isAdmin(): boolean {
    const roles = this.getroles();
    return roles.includes('Admin');
  }
}
