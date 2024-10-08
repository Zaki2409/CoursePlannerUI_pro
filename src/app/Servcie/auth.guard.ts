import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Get the AuthService instance
  const router = inject(Router); // Get the Router instance

  if (authService.isLoggedIn()) {
    return true;
  }
  // Redirect to login page if not authenticated
  router.navigate(['/login']);
  return false;
};
