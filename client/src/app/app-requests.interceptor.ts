import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

const api = '/api';
@Injectable()
export class AppRequestsInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith(api)) {
      request = request.clone({
        url: request.url.replace(api, environment.apiUrl),
        withCredentials: true,
      });
    }
    return next.handle(request);
  }
}

export const appRequestsInterceptorProvider: Provider = {
  multi: true,
  useClass: AppRequestsInterceptor,
  provide: HTTP_INTERCEPTORS,
};
