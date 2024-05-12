import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service'; // Import ThemeService

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() searchQuery: EventEmitter<string> = new EventEmitter<string>();  

  isDropdownOpen: boolean = false;
  logoName: string = "DriveDash";
  isDarkMode: boolean = false; 

  constructor(private router: Router, private themeService: ThemeService) {} // Inject Router and ThemeService

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  
  }

  // Logout function
  logout() {
    // Call your backend API to invalidate the session
    // Redirect the user to the login page
    this.router.navigate(['/login']);
  }
  toggleDarkMode() {
    console.log('Dark mode button clicked!');
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
    
  }
  rightButtonClick() {
    // Implement logic for the right button click
    console.log('Right button clicked!');
  }
  search(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    // Now you can use searchTerm for searching
    // Emit the search query to the parent component
    this.searchQuery.emit(searchTerm);
  }
  
}
