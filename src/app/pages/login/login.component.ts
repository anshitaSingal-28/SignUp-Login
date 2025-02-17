import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // ✅ Import AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { email: '', password: '' }; // ✅ Define user object
  message: string = ''; // ✅ Define error/success message

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  onLogin() {
    console.log('Login initiated...'); // ✅ Debugging log

    this.http.post<{ token?: string; error?: string }>(
      'http://localhost:8080/api/auth/login', 
      this.user
    ).subscribe(
      (response) => {
        console.log('Response received:', response); // ✅ Debugging log

        if (response?.token) {
          this.authService.setToken(response.token); // ✅ Store token using AuthService
          console.log('Login successful, navigating to /company-info');

          this.router.navigate(['/company-info']).then(() => {
            console.log('Navigation successful!'); // ✅ Debugging log
          }).catch(err => console.error('Navigation error:', err));

        } else {
          this.message = response.error || 'Invalid credentials. Please try again!';
        }
      },
      (error) => {
        console.error('Login error:', error);
        this.message = 'Login failed! Please check your credentials or sign up.';
      }
    );
  }
}
