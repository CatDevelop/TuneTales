import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../../../shared/global-services/request/http.service';
import { SessionStorageService } from './session-storage.service';
import { UrlRoutes } from '../../../shared/global-services/request/model/url-routes';
import { RequestMethodType } from '../../../shared/global-services/request/model/request-method';
import { IRegister } from '../model/iRegister';
import { IJWTSession } from '../model/iJWTSession';
import { IAuthorization } from '../model/iAuthorization';


@Injectable({
    providedIn: 'root',
})
export class AuthorizationService {
    public isProcessing: boolean = false;

    constructor(
        private _req: HttpService,
        // private _encr: EncryptionService,
        private _cacher: SessionStorageService,
        private _router: Router
    ) { }

    /**
     * Регистрация пользователя в системе
     * @param email
     * @param pass
     * @return {Observable<HttpResponse<unknown>>} response from server
     */
    public register(email: string, pass: string): Observable<HttpResponse<unknown>> {
        this.isProcessing = true;
        // const encryptedPass: string = this._encr.encryptString(pass);

        const ans: Observable<HttpResponse<unknown>> = this._req.request<void, IRegister>({
            url: `${UrlRoutes.backendDev}/auth/register`,
            method: RequestMethodType.post,
            body: {
                email: email,
                passwordHash: pass,
            }
        });

        ans.subscribe({
            next: () => this.isProcessing = false,
            error: () => this.isProcessing = false
        });

        return ans;
    }

    /**
     * Авторизация пользователя в системе
     * @param email
     * @param password
     */
    public login(email: string, password: string): Observable<HttpResponse<unknown>> {
        this.isProcessing = true;
        // const encryptedPassword: string = this._encr.encryptString(password);

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
