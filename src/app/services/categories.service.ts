import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiUrl = 'https://your-backend-url/api/categories'; // Replace with your backend URL

    constructor(private http: HttpClient) {}

    // Method to fetch categories from the backend
    getCategories(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
}
