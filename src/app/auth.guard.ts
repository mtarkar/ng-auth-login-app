import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

export const authGuard: CanActivateFn = () => {

  const authServie = inject(AuthService)
  const router = inject(Router)

  if (authServie.isLoggedin()) {
    return true

  }
  else {
    router.navigate(['/login'])
    return false
  }


};
