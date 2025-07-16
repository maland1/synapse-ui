import { Component } from '@angular/core';
import type { Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error/error.component';

export const routes: Routes = [
  { path: 'profile', component: Component },
  { path: '**', component: ErrorPageComponent },
];
