import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../../../shared/global-services/request/http-service.service';
import { EncryptionService } from './encrypt-service';
import { SessionStorageService } from './session-storage.service';
import { UrlRoutes } from '../../../shared/global-services/request/model/url-routes';
import { RequestMethodType } from '../../../shared/global-services/request/model/request-method';
import { IRegister } from '../model/iRegister';
import { IJWTSession } from '../model/iJWTSession';
import { IAuthorization } from '../model/iAuthorization';


@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {
    public isProcessing: boolean = false;

    constructor(
        private _req: HttpService,
        private _encr: EncryptionService,
        private _cacher: SessionStorageService,
        private _router: Router
    ) { }

    public register(inviteToken: string, firstName: string, surname: string, email: string, phone: string, pass: string): Observable<HttpResponse<unknown>> {
        this.isProcessing = true;
        const encryptedPass: string = this._encr.encryptString(pass);

        const ans: Observable<HttpResponse<unknown>> = this._req.request<void, IRegister>({
            url: `${UrlRoutes.backendDev}/register`,
            method: RequestMethodType.post,
            body: {
                email: email,
                passwordHash: encryptedPass,
            }
        });

        ans.subscribe({
            next: () => this.isProcessing = false,
            error: () => this.isProcessing = false
        });

        return ans;
    }

    public login(email: string, pass: string): Observable<HttpResponse<unknown>> {
        this.isProcessing = true;
        const encryptedPass: string = this._encr.encryptString(pass);

        const ans: Observable<HttpResponse<IJWTSession>> = this._req.request<IJWTSession, IAuthorization>({
            url: `${UrlRoutes.backendDev}/login`,
            method: RequestMethodType.post,
            body: { email: email, passwordHash: encryptedPass }
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

    public logout(): void {
        this._cacher.removeJWTSession();
        this._router.navigateByUrl('');
    }
}
