import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, finalize, Observable } from 'rxjs';
import { HttpService } from '../../../shared/global-services/request/http.service';
import { HttpResponse } from '@angular/common/http';
import { UrlRoutes } from '../../../shared/global-services/request/model/url-routes';
import { RequestMethodType } from '../../../shared/global-services/request/model/request-method';
import { ICreateSeriesRequestDto } from '../model/dto/request/create-series.request-dto';
import { ICreateSeriesResponseDto } from '../model/dto/response/create-series.response-dto';
import { IGetSeriesByIdResponseDto } from '../model/dto/response/get-series-by-id.response-dto';
import { IEditSeriesByIdRequestDto } from '../model/dto/request/edit-series-by-id.request-dto';
import { IEditSeriesByIdResponseDto } from '../model/dto/response/edit-series-by-id.response-dto';


@Injectable()
export class SeriesService {
    public readonly isProcessing$: Observable<boolean>;
    private _isProcessing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private _req: HttpService,
    ) {
        this.isProcessing$ = this._isProcessing$.asObservable();
    }

    /**
     * Создание серии книг, доступ только для админов
     * @param series
     */
    public createSeries(series: ICreateSeriesRequestDto): Observable<HttpResponse<ICreateSeriesResponseDto>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<ICreateSeriesResponseDto>> = this._req.request<ICreateSeriesResponseDto, ICreateSeriesRequestDto>({
            url: `${UrlRoutes.backendDev}/series`,
            method: RequestMethodType.post,
            body: series,
        });

        response$
            .pipe(
                filter((resp: HttpResponse<ICreateSeriesResponseDto>) => resp.ok),
                finalize(() => {
                    this._isProcessing$.next(false);
                })
            );

        return response$;
    }

    /**
     * Получение информации о серии книг
     * @param seriesId
     */
    public getSeriesById(seriesId: string): Observable<HttpResponse<IGetSeriesByIdResponseDto>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<IGetSeriesByIdResponseDto>> = this._req.request<IGetSeriesByIdResponseDto, void>({
            url: `${UrlRoutes.backendDev}/series/${seriesId}`,
            method: RequestMethodType.post,
        });

        response$
            .pipe(
                filter((resp: HttpResponse<IGetSeriesByIdResponseDto>) => resp.ok),
                finalize(() => {
                    this._isProcessing$.next(false);
                })
            );

        return response$;
    }

    /**
     * Удаление серии, доступ только для админов
     * @param seriesId
     */
    public deleteSeriesById(seriesId: string): Observable<HttpResponse<unknown>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<unknown>> = this._req.request<unknown, void>({
            url: `${UrlRoutes.backendDev}/series/${seriesId}`,
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

    /**
     * Изменение серии книг, доступ только для админов
     * @param seriesId
     * @param series
     */
    public editSeriesById(seriesId: string, series: IEditSeriesByIdRequestDto): Observable<HttpResponse<IEditSeriesByIdResponseDto>> {
        this._isProcessing$.next(true);

        const response$: Observable<HttpResponse<IEditSeriesByIdResponseDto>> = this._req.request<IEditSeriesByIdResponseDto, IEditSeriesByIdRequestDto>({
            url: `${UrlRoutes.backendDev}/series/${seriesId}`,
            method: RequestMethodType.patch,
            body: series,
        });

        response$
            .pipe(
                filter((resp: HttpResponse<IEditSeriesByIdResponseDto>) => resp.ok),
                finalize(() => {
                    this._isProcessing$.next(false);
                })
            );

        return response$;
    }
}
