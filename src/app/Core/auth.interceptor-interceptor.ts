import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
// This interceptor adds the JWT token to the Authorization header of outgoing HTTP requests if the token exists in local storage.
  const token = localStorage.getItem('token');
  if (token) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)  
    });
    return next(authReq);
  }
  return next(req);
};
