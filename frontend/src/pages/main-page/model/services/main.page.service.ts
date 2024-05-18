import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, finalize, Observable } from 'rxjs';
import { HttpService } from '../../../../shared/global-services/request/http.service';
import { HttpResponse } from '@angular/common/http';
import { UrlRoutes } from '../../../../shared/global-services/request/model/url-routes';
import { RequestMethodType } from '../../../../shared/global-services/request/model/request-method';
import { GetBooksResponseDto } from '../types/dto/get-books.response-dto';

@Injectable()
export class MainPageService {
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
    public getBookById(): Observable<HttpResponse<GetBooksResponseDto>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<GetBooksResponseDto>> = this._req.request<GetBooksResponseDto, void>({
            url: `${UrlRoutes.backendDev}/book`,
            method: RequestMethodType.get,
        });

        response$
            .pipe(
                filter((resp: HttpResponse<GetBooksResponseDto>) => resp.ok),
                finalize(() => {
                    this._isProcessing$.next(false);
                })
            );

        return response$;
    }
}

