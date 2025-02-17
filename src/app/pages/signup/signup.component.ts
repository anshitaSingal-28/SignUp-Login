import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = { name: '', email: '', password: '' }; // ✅ Define user object
  message: string = ''; // ✅ Define message

  constructor(private http: HttpClient) {}

  onSignup() {
    this.http.post<{ message: string; error?: string }>('http://localhost:8080/api/auth/signup', this.user)
      .subscribe(
        (response) => {
          this.message = response.message || 'Signup successful!';
        },
        (error) => {
          this.message = error.error?.error || 'Signup failed!';
          console.error('Signup error', error);
        }
      );
  }
}
