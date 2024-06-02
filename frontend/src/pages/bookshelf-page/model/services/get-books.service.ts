import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, finalize, Observable } from 'rxjs';
import { HttpService } from '../../../../shared/global-services/request/http.service';
import { HttpResponse } from '@angular/common/http';
import { UrlRoutes } from '../../../../shared/global-services/request/model/url-routes';
import { RequestMethodType } from '../../../../shared/global-services/request/model/request-method';
import { IFavourite } from '../types/dto/get-books.response-dto';

@Injectable()
export class GetBooksService {
    public readonly isProcessing$: Observable<boolean>;
    private _isProcessing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private _req: HttpService,
    ) {
        this.isProcessing$ = this._isProcessing$.asObservable();
    }

    /**
     * Получение списка книг
     */
    public getAllBooks(): Observable<HttpResponse<IFavourite>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<IFavourite>> = this._req.request<IFavourite, void>({
            url: `${UrlRoutes.backendDev}/user/profile`,
            method: RequestMethodType.get,
            auth: true,
        });

        response$
            .pipe(
                filter((resp: HttpResponse<IFavourite>) => resp.ok),
                finalize(() => {
                    this._isProcessing$.next(false);
                })
            );

        return response$;
    }
}

