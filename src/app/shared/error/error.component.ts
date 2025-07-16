import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error-page',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 class="text-5xl font-bold text-red-600 mb-4">{{ title }}</h1>
      <p class="text-lg mb-6">{{ message }}</p>
      <a routerLink="/" class="text-blue-500 hover:underline">
        Return to Home
      </a>
    </div>
  `,
})
export class ErrorPageComponent {
  @Input() title: string = 'An Error Occurred';
  @Input() message: string = 'Something went wrong. Please try again later.';
}
