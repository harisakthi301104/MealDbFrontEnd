import { routes } from './../../app.routes';
import { Login } from './../login/login';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule , RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  constructor(private authService: AuthService , private router: Router) { }

  formData : any = {
    username: '',
    password: '',
    Role: '',
  };

    register() {
      this.authService.Register(this.formData).subscribe({
        next: (response) => {
          this.router.navigate(['/login']);
          console.log('Registration successful:', response);
          // Handle successful registration, e.g., navigate to a different page
        },
        error: (error) => {
          console.error('Registration failed:', error);
          // Handle registration error, e.g., show an error message
        }
      });
}
}
