import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/user'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  // localhost:4200  calling to localhost:8080

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  createUser(user:User): Observable<User> {
    return this.http.post<User>(this.apiUrl,user);
  }

}
