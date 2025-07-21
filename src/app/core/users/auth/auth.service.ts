import { Injectable, signal } from '@angular/core';
import type { IUserData } from './models/IUserData.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = signal(false);
  userInfo!: IUserData[];

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
