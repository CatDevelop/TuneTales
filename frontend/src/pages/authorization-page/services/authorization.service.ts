import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../../../shared/global-services/request/http.service';
import { SessionStorageService } from './session-storage.service';
import { UrlRoutes } from '../../../shared/global-services/request/model/url-routes';
import { RequestMethodType } from '../../../shared/global-services/request/model/request-method';
import { IJWTSession } from '../model/iJWTSession';
import { IAuthorization } from '../model/iAuthorization';


@Injectable({
    providedIn: 'root',
})
export class AuthorizationService {
    public isProcessing: boolean = false;

    constructor(
        private _req: HttpService,
        private _cacher: SessionStorageService,
        private _router: Router
    ) { }

    /**
     * Авторизация пользователя в системе
     * @param email
     * @param password
     */
    public login(email: string, password: string): Observable<HttpResponse<unknown>> {
        this.isProcessing = true;

        const ans: Observable<HttpResponse<IJWTSession>> = this._req.request<IJWTSession, IAuthorization>({
            url: `${UrlRoutes.backendDev}/auth/login`,
            method: RequestMethodType.post,
            body: { login: email, password: password }
        });

        ans.subscribe({
            next: resp => {
                if (resp.ok) {
                    this._cacher.cacheJWTSession(resp.body ?? { accessToken: '' });

                    this._router
                        .navigateByUrl('/');
                }
                this.isProcessing = false;
            },
            error: () => this.isProcessing = false
        });

        return ans;
    }

    /**
     * Выход пользователя из системы
     */
    public logout(): void {
        this._cacher.removeJWTSession();
        this._router.navigateByUrl('');
    }
}
