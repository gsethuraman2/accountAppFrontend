import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../model/Account';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8080/account'; // Replace with your API endpoint
  constructor(private http: HttpClient) { } // dependency injection
 
  fetchAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiUrl);
  }
  createAccount(account:Account): Observable<Account> {
    return this.http.post<Account>(this.apiUrl+'/1',account);
  }

}
