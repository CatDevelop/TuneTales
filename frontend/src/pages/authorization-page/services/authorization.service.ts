import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, finalize, Observable, tap } from 'rxjs';
import { HttpService } from '../../../shared/global-services/request/http.service';
import { SessionStorageService } from './session-storage.service';
import { UrlRoutes } from '../../../shared/global-services/request/model/url-routes';
import { RequestMethodType } from '../../../shared/global-services/request/model/request-method';
import { IAuthorization } from '../model/authorization.interface';
import { IAuthorizationResponseDto } from '../model/dto/response/authorization-response.dto';


@Injectable()
export class AuthorizationService {
    public readonly isProcessing$: Observable<boolean>;
    private _isProcessing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private _req: HttpService,
        private _cacher: SessionStorageService,
        private _router: Router,
    ) {
        this.isProcessing$ = this._isProcessing$.asObservable();
    }

    /**
     * Авторизация пользователя в системе
     * @param email
     * @param password
     */
    public login(email: string, password: string): Observable<HttpResponse<unknown>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<IAuthorizationResponseDto>> = this._req.request<IAuthorizationResponseDto, IAuthorization>({
            url: `${UrlRoutes.backendDev}/auth/login`,
            method: RequestMethodType.post,
            body: { login: email, password: password }
        });

        response$ // observable -> ответы (только один)
            .pipe(
                filter((resp: HttpResponse<IAuthorizationResponseDto>) => resp.ok),
                tap((resp: HttpResponse<IAuthorizationResponseDto>) => {
                    this._cacher.cacheJWTSession({
                        accessToken: resp.body?.accessToken || '',
                    });
                }),
                finalize(() => this._isProcessing$.next(false))
            ).subscribe();

        return response$;
    }

    /**
     * Выход пользователя из системы
     */
    public logout(): void {
        this._cacher.removeJWTSession();
        this._router.navigateByUrl('');
    }
}
