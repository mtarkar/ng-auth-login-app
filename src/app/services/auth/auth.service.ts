import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private isAuthenticated = false;
  constructor(
    private cookie: CookieService
  ) {


  }

  isLoggedin(): boolean {

    const token = this.cookie.get('token')

    if (token) {
      this.isAuthenticated = true
    }
    else {
      this.isAuthenticated = false
    }
    return this.isAuthenticated

  }


}
