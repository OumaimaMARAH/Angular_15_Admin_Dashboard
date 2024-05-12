import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  setDarkMode(isDarkMode: boolean) {
    throw new Error('Method not implemented.');
  }
  private darkMode = false; // Initialize dark mode as false by default

  constructor() {}

  toggleDarkMode() {
    this.darkMode = !this.darkMode; // Toggle dark mode
    if (this.darkMode) {
      document.body.classList.add('dark-mode'); // Add 'dark-mode' class to body
    } else {
      document.body.classList.remove('dark-mode'); // Remove 'dark-mode' class from body
    }
  }
}
