//  an authentication service to manage token storage and other auth-related tasks

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'jwt'; // Define the token key

  constructor() { }

  // Method to store the token
  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  // Method to retrieve the token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Method to check if the user is logged in
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  // Method to log out the user
  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  
}
