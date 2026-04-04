import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(public authService: AuthService , private router: Router) { }

  formData : any = {
    username: '',
    password: '',
  };

  login() {
    this.authService.Login(this.formData).subscribe({
      next: (response) => {
        this.router.navigate(['/Admin']);
        console.log('Login successful:', response);
        // Handle successful login, e.g., navigate to a different page
      },
      error: (error) => {
        console.error('Login failed:', error);  
        // Handle login error, e.g., show an error message
      }
    });
} 
} 
