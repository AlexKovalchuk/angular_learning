import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('request', request);
    const {method} = request;
    if (method === 'POST') {
      request = request.clone({
        setHeaders: {
          outputData: 'true'
        }
      });
    }
    if (method === 'GET') {
      request = request.clone({
        setHeaders: {
          inputData: 'true'
        }
      });
    }
    return next.handle(request);
  }
}
