import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(
    private http: HttpClient
  ) {

  }

  login(email: string, password: string): Observable<any> {

    return this.http.post('https://reqres.in/api/login', {
      email: email,
      password: password
    }).pipe(
      retry(1),
      catchError(this.handleError)
    )

  }

  handleError(error: HttpErrorResponse) {

    let errorMessage = 'Something Went Wrong'

    return throwError(() => errorMessage)

  }



}
