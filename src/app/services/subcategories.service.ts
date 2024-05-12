import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subcategory } from '../model/subcategory';

const apiUrl=["http://localhost:8081"];

@Injectable({
  providedIn: 'root'
})
export class SubcategoriesService {

  constructor(private http: HttpClient) { }

  getAllSubCategories():Observable<Subcategory[]>{
    return this.http.get<Subcategory[]>(apiUrl+"/catalogues/api/subcategories/");
  }
}
