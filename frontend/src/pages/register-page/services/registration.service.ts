import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, finalize, Observable } from 'rxjs';
import { HttpService } from '../../../shared/global-services/request/http.service';
import { UrlRoutes } from '../../../shared/global-services/request/model/url-routes';
import { RequestMethodType } from '../../../shared/global-services/request/model/request-method';
import { IRegister } from '../model/register.interface';
import { IRegisterResponse } from '../model/dto/response/register.response-dto';
import { AuthorizationService } from '../../authorization-page/services/authorization.service';


@Injectable()
export class RegistrationService {
    public readonly isProcessing$: Observable<boolean>;
    private _isProcessing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private _req: HttpService,
        private _auth: AuthorizationService,
    ) {
        this.isProcessing$ = this._isProcessing$.asObservable();
    }

    /**
     * Регистрация пользователя в системе
     * @param props IRegister object
     * @return {Observable<HttpResponse<unknown>>} response from server
     */
    public register(props: IRegister): Observable<HttpResponse<unknown>> {
        this._isProcessing$.next(true);
        const {
            password,
            login,
        }: IRegister = props;

        const response$: Observable<HttpResponse<unknown>> = this._req.request<IRegisterResponse, IRegister>({
            url: `${UrlRoutes.backendDev}/user`,
            method: RequestMethodType.post,
            body: props,
        });

        response$
            .pipe(
                filter((resp: HttpResponse<unknown>) => resp.ok),
                finalize(() => {
                    this._isProcessing$.next(false);
                    this._auth.login(login, password);
                })
            )
            .subscribe();

        return response$;
    }
}
