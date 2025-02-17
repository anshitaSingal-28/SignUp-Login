import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Method to check if the user is authenticated based on token
  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return token ? true : false;
  }

  // Method to store the authentication token
  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Method to remove the token when logging out
  logout(): void {
    localStorage.removeItem('authToken');
  }
}
