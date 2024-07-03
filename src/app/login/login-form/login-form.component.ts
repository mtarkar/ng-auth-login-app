import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginUserService } from 'src/app/services/login-user/login-user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {


  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })


  constructor(
    private loginUser: LoginUserService,
    private cookie: CookieService,
    private router: Router
  ) {

  }


  submitData() {
    console.log(
      this.form.value
    )
    const { email, password } = this.form.value

    this.loginUser.login(email!, password!).subscribe({
      next: (data) => {
        console.log(data)
        const { token } = data
        this.cookie.set('token', token)

        this.router.navigate(['/dashboard'])

      },
      error: (error) => {
        console.log(error)
      }
    })
  }


}
