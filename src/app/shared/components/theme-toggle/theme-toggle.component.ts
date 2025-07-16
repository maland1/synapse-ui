import { Component, type OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { getUserPreferences, updateUserPreference } from '../../utils/user-preferences.utils';

@Component({
  selector: 'app-theme-toggle',
  imports: [MatIconModule],
  template: `
    <button mat-icon-button title="Toggle Theme" (click)="toggleTheme()">
      <mat-icon>{{ isDarkMode ? 'light_mode' : 'dark_mode' }}</mat-icon>
    </button>
  `,
})
export class ThemeToggleComponent implements OnInit {
  isDarkMode = false;

  ngOnInit() {
    const prefs = getUserPreferences();
    this.isDarkMode = prefs.theme === 'dark';

    this.setTheme(this.isDarkMode);
  }

  toggleTheme() {
    const prefs = getUserPreferences();
    const isDark = prefs.theme !== 'dark';
    prefs.theme = isDark ? 'dark' : 'light';

    updateUserPreference('theme', prefs.theme);
    this.setTheme(isDark);
  }

  private setTheme(isDark: boolean) {
    this.isDarkMode = isDark;
    const root = document.documentElement;

    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }
}
