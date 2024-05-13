import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, finalize, Observable } from 'rxjs';
import { HttpService } from '../../../shared/global-services/request/http.service';
import { ICreateAuthorRequestDto } from '../model/dto/request/create-author.request-dto';
import { HttpResponse } from '@angular/common/http';
import { ICreateAuthorResponseDto } from '../model/dto/response/create-author.response-dto';
import { UrlRoutes } from '../../../shared/global-services/request/model/url-routes';
import { RequestMethodType } from '../../../shared/global-services/request/model/request-method';
import { IGetAuthorByIdResponseDto } from '../model/dto/response/get-author-by-id.response-dto';


@Injectable()
export class AuthorService {
    public readonly isProcessing$: Observable<boolean>;
    private _isProcessing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private _req: HttpService,
    ) {
        this.isProcessing$ = this._isProcessing$.asObservable();
    }

    /**
     * Создание автора, доступ только для админов
     * @param author
     */
    public createAuthor(author: ICreateAuthorRequestDto): Observable<HttpResponse<ICreateAuthorResponseDto>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<ICreateAuthorResponseDto>> = this._req.request<ICreateAuthorResponseDto, ICreateAuthorRequestDto>({
            url: `${UrlRoutes.backendDev}/author`,
            method: RequestMethodType.post,
            body: author,
        });

        response$
            .pipe(
                filter((resp: HttpResponse<ICreateAuthorResponseDto>) => resp.ok),
                finalize(() => {
                    this._isProcessing$.next(false);
                })
            );

        return response$;
    }

    /**
     * Получение информации об авторе
     * @param authorId
     */
    public getAuthorById(authorId: string): Observable<HttpResponse<IGetAuthorByIdResponseDto>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<IGetAuthorByIdResponseDto>> = this._req.request<IGetAuthorByIdResponseDto, void>({
            url: `${UrlRoutes.backendDev}/author/${authorId}`,
            method: RequestMethodType.post,
        });

        response$
            .pipe(
                filter((resp: HttpResponse<IGetAuthorByIdResponseDto>) => resp.ok),
                finalize(() => {
                    this._isProcessing$.next(false);
                })
            );

        return response$;
    }

    /**
     * Удаление автора, доступ только для админов
     * @param authorId
     */
    public deleteAuthorById(authorId: string): Observable<HttpResponse<unknown>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<unknown>> = this._req.request<unknown, void>({
            url: `${UrlRoutes.backendDev}/author/${authorId}`,
            method: RequestMethodType.delete,
        });

        response$
            .pipe(
                filter((resp: HttpResponse<unknown>) => resp.ok),
                finalize(() => {
                    this._isProcessing$.next(false);
                })
            );

        return response$;
    }
}
