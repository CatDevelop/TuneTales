import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, finalize, Observable } from 'rxjs';
import { HttpService } from '../../../shared/global-services/request/http.service';
import { HttpResponse } from '@angular/common/http';
import { IGetBookResponseDto } from '../model/dto/response/get-book.response-dto';
import { UrlRoutes } from '../../../shared/global-services/request/model/url-routes';
import { RequestMethodType } from '../../../shared/global-services/request/model/request-method';
import { ICreateBookRequestDto } from '../model/dto/request/create-book.request-dto';
import { ICreateBookResponseDto } from '../model/dto/response/create-book.response-dto';


@Injectable()
export class BookService {
    public readonly isProcessing$: Observable<boolean>;
    private _isProcessing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private _req: HttpService,
    ) {
        this.isProcessing$ = this._isProcessing$.asObservable();
    }

    /**
     * Получение информации о книге с сервера
     * @param search
     */
    public getBookBySearch(search: string): Observable<HttpResponse<IGetBookResponseDto[]>> {
        this._isProcessing$.next(true);

        const searchParams: URLSearchParams = new URLSearchParams({ search });

        const response$: Observable<HttpResponse<IGetBookResponseDto[]>> = this._req.request<IGetBookResponseDto[], void>({
            url: `${UrlRoutes.backendDev}/book?${searchParams.toString()}`,
            method: RequestMethodType.get,
        });

        response$
            .pipe(
                filter((resp: HttpResponse<IGetBookResponseDto[]>) => resp.ok),
                finalize(() => {
                    this._isProcessing$.next(false);
                })
            );

        return response$;
    }

    /**
     * Получение информации о книге с сервера
     * @param bookId
     */
    public getBookById(bookId: string): Observable<HttpResponse<IGetBookResponseDto>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<IGetBookResponseDto>> = this._req.request<IGetBookResponseDto, void>({
            url: `${UrlRoutes.backendDev}/book/${bookId}`,
            method: RequestMethodType.get,
        });

        response$
            .pipe(
                filter((resp: HttpResponse<IGetBookResponseDto>) => resp.ok),
                finalize(() => {
                    this._isProcessing$.next(false);
                })
            );

        return response$;
    }

    /**
     * Создание книги, доступ только для админов
     * @param book
     */
    public createBook(book: ICreateBookRequestDto): Observable<HttpResponse<ICreateBookResponseDto>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<ICreateBookResponseDto>> = this._req.request<ICreateBookResponseDto, ICreateBookRequestDto>({
            url: `${UrlRoutes.backendDev}/book`,
            method: RequestMethodType.post,
            body: book,
        });

        response$
            .pipe(
                filter((resp: HttpResponse<ICreateBookResponseDto>) => resp.ok),
                finalize(() => {
                    this._isProcessing$.next(false);
                })
            );

        return response$;
    }

    /**
     * Удаление книги, доступ только для админов
     * @param bookId
     */
    public deleteBookById(bookId: string): Observable<HttpResponse<unknown>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<unknown>> = this._req.request<unknown, void>({
            url: `${UrlRoutes.backendDev}/book/${bookId}`,
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
