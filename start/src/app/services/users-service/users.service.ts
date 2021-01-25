import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user-interfaces';


@Injectable()
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
    return this.http.get<User[]>(`${this.usersUrl}/users-list`)
      .pipe(
        map((users: User[], index: number) => {
          console.log('map:', index, '-', users);
          return users.map(user => ({...user, status: 'Champion'}));
        }),
        catchError(error => {
          console.log('Some error', error);
          return throwError(error);
        })
      );
  }

  getUserCard(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/user-card/${id}`);
  }

  // addUser(newUser: any): Observable<User[]> {}

  private handleError(error: HttpErrorResponse): any {
    console.log('Error during request.');
    return throwError(error);
  }

}
