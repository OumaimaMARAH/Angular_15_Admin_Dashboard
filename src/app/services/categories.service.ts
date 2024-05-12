import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Category} from '../model/category';



const apiUrl=["http://localhost:8081"];

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  //private apiUrl = 'https://your-backend-url/api/categories'; // Replace with your backend URL

    constructor(private http: HttpClient) {}

    // Method to fetch categories from the backend
    //getCategories(): Observable<any[]> {
       // return this.http.get<any[]>(this.apiUrl);
    //}
    getAllCategories():Observable<Category[]>{
      return this.http.get<Category[]>(apiUrl+"/catalogues/api/categories/");
    }

    createCategory(Category: any):Observable<any>{
      return this.http.post(apiUrl+"/catalogues/api/categories/create", Category);
    }

    getCategoryById(categoryId: Number): Observable<any>{
      return this.http.get(apiUrl+"/catalogues/api/categories/"+ categoryId);
    }
    

    updateCategory(categoryId: Number, Category: any): Observable<any>{
      return this.http.put(apiUrl+"/catalogues/api/categories/"+ categoryId, Category);
    }
    

    deleteCategory(categoryId: Number): Observable<any>{
      return this.http.delete(apiUrl+"/catalogues/api/categories/"+ categoryId);
    }
    
}
