import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = signal(false);
  userInfo!: string[];

  async login() {
    this.isLoggedIn.set(true);
    this.userInfo = this.userInfo;
  }

  async logout() {
    this.isLoggedIn.set(false);
  }

  async getUser() {
    return this.userInfo;
  }
}
