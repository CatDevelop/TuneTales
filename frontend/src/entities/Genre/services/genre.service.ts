import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, finalize, Observable } from 'rxjs';
import { HttpService } from '../../../shared/global-services/request/http.service';
import { HttpResponse } from '@angular/common/http';
import { UrlRoutes } from '../../../shared/global-services/request/model/url-routes';
import { RequestMethodType } from '../../../shared/global-services/request/model/request-method';
import { ICreateGenreRequestDto } from '../model/dto/request/create-genre.request-dto';
import { ICreateGenreResponseDto } from '../model/dto/response/create-genre.response-dto';
import { IGetGenreByIdResponseDto } from '../model/dto/response/get-genre-by-id.response-dto';


@Injectable()
export class GenreService {
    public readonly isProcessing$: Observable<boolean>;
    private _isProcessing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private _req: HttpService,
    ) {
        this.isProcessing$ = this._isProcessing$.asObservable();
    }

    /**
     * Создание жанра, доступ только для админов
     * @param genre
     */
    public createGenre(genre: ICreateGenreRequestDto): Observable<HttpResponse<ICreateGenreResponseDto>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<ICreateGenreResponseDto>> = this._req.request<ICreateGenreResponseDto, ICreateGenreRequestDto>({
            url: `${UrlRoutes.backendDev}/genre`,
            method: RequestMethodType.post,
            body: genre,
        });

        response$
            .pipe(
                filter((resp: HttpResponse<ICreateGenreResponseDto>) => resp.ok),
                finalize(() => {
                    this._isProcessing$.next(false);
                })
            );

        return response$;
    }

    /**
     * Получение информации об авторе
     * @param genreId
     */
    public getGenreById(genreId: string): Observable<HttpResponse<IGetGenreByIdResponseDto>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<IGetGenreByIdResponseDto>> = this._req.request<IGetGenreByIdResponseDto, void>({
            url: `${UrlRoutes.backendDev}/genre/${genreId}`,
            method: RequestMethodType.post,
        });

        response$
            .pipe(
                filter((resp: HttpResponse<IGetGenreByIdResponseDto>) => resp.ok),
                finalize(() => {
                    this._isProcessing$.next(false);
                })
            );

        return response$;
    }

    /**
     * Удаление жанра, доступ только для админов
     * @param genreId
     */
    public deleteGenreById(genreId: string): Observable<HttpResponse<unknown>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<unknown>> = this._req.request<unknown, void>({
            url: `${UrlRoutes.backendDev}/genre/${genreId}`,
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
