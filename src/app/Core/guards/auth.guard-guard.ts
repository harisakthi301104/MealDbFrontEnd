import { inject } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  const rtr = inject(Router);

  if(auth.isloggedIn() && auth.isAdmin()) {
    return true;
  }

  rtr.navigate(['/login']);
  return false;
};
