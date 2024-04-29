import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../services/session-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private _cacher: SessionStorageService) {}

    /**
     * Intercept
     * @param req
     * @param next
     */
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const sessionToken: string = this._cacher.getJWTSession().accessToken;

        if (sessionToken) {
            const newRequest: HttpRequest<any> = req.clone({
                headers: req.headers.set('authorization', `Bearer ${sessionToken}`)
            });

            return next.handle(newRequest);
        }

        return next.handle(req);
    }
}
