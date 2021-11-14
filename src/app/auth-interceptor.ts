import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {
  user?: SocialUser;

  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const auth = this.injector.get(SocialAuthService);

    auth.authState.subscribe((user) => (this.user = user));

    const clonedRequest = req.clone({
      headers: req.headers
        .set('AuthorizationEmail', this.user?.email ?? '')
        .set('AuthorizationId', this.user?.id ?? ''),
    });

    return next.handle(clonedRequest);
  }
}
