import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from 'src/app/Module/Users';

@Injectable({
  providedIn: 'root'
})
export class USERService {
  private baseUrl = 'http://localhost:8081';
  apiUrl: any;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseUrl+"/users/");
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(this.baseUrl+"/users/"+id);
  }
  
  deleteUser(id: number): Observable<any> {
    // Implement logic to delete user
    // For example:
    return this.http.delete(this.baseUrl + "/users/admin/" + id);

  }
  //editUser(userId: number): Observable<any> {
    //return this.http.put<any>(this.baseUrl+"/users/"+userId);
  //}
  

  
}
