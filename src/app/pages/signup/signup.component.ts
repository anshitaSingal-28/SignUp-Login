import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#\$%^&*]).{8,}$/)
        ]
      ]
    });
  }

  onSignup() {
    if (this.signupForm.invalid) {
      this.message = 'Please fill in all fields correctly!';
      return;
    }

    this.authService.signup(this.signupForm.value).subscribe(
      (response) => {
        this.message = response.message || 'Signup successful!';
        this.signupForm.reset();
      },
      (error) => {
        this.message = error.error?.error || 'Signup failed!';
        console.error('Signup error', error);
      }
    );
  }
}
