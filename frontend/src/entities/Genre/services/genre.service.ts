import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, finalize, Observable } from 'rxjs';
import { HttpService } from '../../../shared/global-services/request/http.service';
import { HttpResponse } from '@angular/common/http';
import { UrlRoutes } from '../../../shared/global-services/request/model/url-routes';
import { RequestMethodType } from '../../../shared/global-services/request/model/request-method';
import { ICreateGenreRequestDto } from '../model/dto/request/create-genre.request-dto';
import { ICreateGenreResponseDto } from '../model/dto/response/create-genre.response-dto';
import { IGetGenresResponseDto } from '../model/dto/response/get-genres.response-dto';
import { IGenre } from '../model/genre.interface';


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
     * Получение всех жанров
     */
    public getGenres(): Observable<HttpResponse<IGetGenresResponseDto>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<IGetGenresResponseDto>> = this._req.request<IGetGenresResponseDto, void>({
            url: `${UrlRoutes.backendDev}/genre`,
            method: RequestMethodType.get,
        });

        response$
            .pipe(
                filter((resp: HttpResponse<IGetGenresResponseDto>) => resp.ok),
                finalize(() => {
                    this._isProcessing$.next(false);
                })
            );

        return response$;
    }

    /**
     * Получение всех книг жанра
     * @param genreId
     */
    public getGenreById(genreId: string): Observable<HttpResponse<IGenre>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<IGenre>> = this._req.request<IGenre, void>({
            url: `${UrlRoutes.backendDev}/genre/${genreId}`,
            method: RequestMethodType.post,
        });

        response$
            .pipe(
                filter((resp: HttpResponse<IGenre>) => resp.ok),
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
