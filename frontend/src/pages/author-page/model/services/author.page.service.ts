import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, finalize, Observable } from 'rxjs';
import { HttpService } from '../../../../shared/global-services/request/http.service';
import { HttpResponse } from '@angular/common/http';
import { UrlRoutes } from '../../../../shared/global-services/request/model/url-routes';
import { RequestMethodType } from '../../../../shared/global-services/request/model/request-method';
import { GetAuthorResponseDto } from '../types/dto/get-author.response-dto';

@Injectable()
export class AuthorPageService {
    public readonly isProcessing$: Observable<boolean>;
    private _isProcessing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private _req: HttpService,
    ) {
        this.isProcessing$ = this._isProcessing$.asObservable();
    }

    /**
     * Получение автора
     */
    public getAuthor(authorId: string): Observable<HttpResponse<GetAuthorResponseDto>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<GetAuthorResponseDto>> = this._req.request<GetAuthorResponseDto, void>({
            url: `${UrlRoutes.backendDev}/author/${authorId}`,
            method: RequestMethodType.get,
            auth: true,
        });

        response$
            .pipe(
                filter((resp: HttpResponse<GetAuthorResponseDto>) => resp.ok),
                finalize(() => {
                    this._isProcessing$.next(false);
                })
            );

        return response$;
    }
}

