import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../../../shared/global-services/request/http.service';
import { UrlRoutes } from '../../../shared/global-services/request/model/url-routes';
import { RequestMethodType } from '../../../shared/global-services/request/model/request-method';
import { IRegister } from '../model/iRegister';
import { SessionStorageService } from '../../authorization-page/services/session-storage.service';
import { IRegisterResponse } from '../model/iRegisterResponse';
import { AuthorizationService } from '../../authorization-page/services/authorization.service';


@Injectable({
    providedIn: 'root',
})
export class RegistrationService {
    public isProcessing: boolean = false;

    constructor(
        private _req: HttpService,
        private _cacher: SessionStorageService,
        private _router: Router,
        private _auth: AuthorizationService,
    ) { }

    /**
     * Регистрация пользователя в системе
     * @param props IRegister object
     * @return {Observable<HttpResponse<unknown>>} response from server
     */
    public register(props: IRegister): Observable<HttpResponse<unknown>> {
        this.isProcessing = true;
        const {
            email,
            password,
            lastName,
            secondName,
            firstName,
            login,
        }: IRegister = props;

        const ans: Observable<HttpResponse<unknown>> = this._req.request<IRegisterResponse, IRegister>({
            url: `${UrlRoutes.backendDev}/user`,
            method: RequestMethodType.post,
            body: {
                email,
                password,
                login,
                firstName,
                secondName,
                lastName,
            }
        });

        ans.subscribe({
            next: (res) => {
                this.isProcessing = false;
                this._auth.login(login, password);
            },
            error: () => this.isProcessing = false
        });

        return ans;
    }
}
