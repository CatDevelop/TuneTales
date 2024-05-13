import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, finalize, Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { ICreateBookPartRequestDto } from '../dto/request/create-bookpart.request-dto';
import { ICreateBookPartResponseDto } from '../dto/response/create-bookpart.response-dto';
import { IGetBookPartByIdResponseDto } from '../dto/response/get-bookpart-by-id.response-dto';
import { HttpService } from '../../../../shared/global-services/request/http.service';
import { UrlRoutes } from '../../../../shared/global-services/request/model/url-routes';
import { RequestMethodType } from '../../../../shared/global-services/request/model/request-method';


@Injectable()
export class BookPartService {
    public readonly isProcessing$: Observable<boolean>;
    private _isProcessing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private _req: HttpService,
    ) {
        this.isProcessing$ = this._isProcessing$.asObservable();
    }

    /**
     * Создание главы, доступ только для админов
     * @param bookPart
     */
    public createBookPart(bookPart: ICreateBookPartRequestDto): Observable<HttpResponse<ICreateBookPartResponseDto>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<ICreateBookPartResponseDto>> = this._req.request<ICreateBookPartResponseDto, ICreateBookPartRequestDto>({
            url: `${UrlRoutes.backendDev}/book-part`,
            method: RequestMethodType.post,
            body: bookPart,
        });

        response$
            .pipe(
                filter((resp: HttpResponse<ICreateBookPartResponseDto>) => resp.ok),
                finalize(() => {
                    this._isProcessing$.next(false);
                })
            );

        return response$;
    }

    /**
     * Получение информации о главе
     * @param bookPartId
     */
    public getBookPartById(bookPartId: string): Observable<HttpResponse<IGetBookPartByIdResponseDto>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<IGetBookPartByIdResponseDto>> = this._req.request<IGetBookPartByIdResponseDto, void>({
            url: `${UrlRoutes.backendDev}/book-part/${bookPartId}`,
            method: RequestMethodType.post,
        });

        response$
            .pipe(
                filter((resp: HttpResponse<IGetBookPartByIdResponseDto>) => resp.ok),
                finalize(() => {
                    this._isProcessing$.next(false);
                })
            );

        return response$;
    }

    /**
     * Удаление главы, доступ только для админов
     * @param bookPartId
     */
    public deleteBookPartById(bookPartId: string): Observable<HttpResponse<unknown>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<unknown>> = this._req.request<unknown, void>({
            url: `${UrlRoutes.backendDev}/book-part/${bookPartId}`,
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
