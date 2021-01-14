import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/interfaces/user-interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) { }
  private usersUrl = 'https://private-63a21-angularstart.apiary-mock.com';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getUsersList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}/users-list`);
  }

  getUserCard(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/user-card/${id}`);
  }

}
