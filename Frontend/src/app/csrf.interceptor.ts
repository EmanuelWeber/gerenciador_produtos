import { Injectable, Inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable()
export class CsrfInterceptor implements HttpInterceptor {
  constructor(@Inject(DOCUMENT) private document: Document) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tokenMeta = this.document.querySelector(
      'meta[name="csrf-token"]'
    ) as HTMLMetaElement;
    const token = tokenMeta?.content;

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('X-CSRF-Token', token),
      });
      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
