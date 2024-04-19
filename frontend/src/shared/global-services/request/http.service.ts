import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { catchError, first, map, merge, Observable, share, skipWhile, Subject, takeUntil, throwError, timeout } from 'rxjs';
import { IRequestOptions } from './model/request-options';
import { ContentType } from './model/content-type';
import { SessionStorageService } from '../../../pages/authorization/services/session-storage.service';
import { IHttpOptions } from './model/iHttpOptions';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    private _takeUntil: Subject<void> = new Subject<void>();

    constructor(
        protected http: HttpClient,
        private _session: SessionStorageService,
    ) { }

    /**
     * Отписываемся от всего
     */
    public unsubscribeAll(): void {
        this._takeUntil.next();
    }

    /**
     * Обертка для запроса
     * @param {IRequestOptions<T>} requestParams параметры запроса
     * @returns {Observable<HttpResponse<R>>} ответ
     */
    public request<T, F = null>(requestParams: IRequestOptions<F>): Observable<HttpResponse<T>> {

        const httpOptions: IHttpOptions = {
            headers: requestParams.headers || new HttpHeaders(),
            reportProgress: false,
            responseType: requestParams.responseType,
            withCredentials: requestParams.withCredentials
        };

        if (!requestParams.contentType) {
            requestParams.contentType = ContentType.json;
        }

        if (requestParams.auth) {
            httpOptions.headers = httpOptions.headers?.set('authorization', `Bearer ${this._session.getJWTSession().accessToken}`);
        }

        if (httpOptions.headers && !httpOptions.headers.has('Content-Type') && requestParams.contentType !== ContentType.multipartFormData && requestParams.contentType !== ContentType.textXml) {
            httpOptions.headers = httpOptions.headers.set('Content-Type', this.convertContentType(requestParams.contentType));
        }

        if (!requestParams.method) {
            throw new Error('Specify request method');
        }

        if (!requestParams.body) {
            requestParams.body = null;
        }

        const request: HttpRequest<F> = new HttpRequest<F>(requestParams.method, requestParams.url, requestParams.body, httpOptions);
        console.log('request:', request);


        return (this.http.request<T>(request) as Observable<HttpResponse<T>>)
            .pipe(
                skipWhile((event: HttpResponse<T>) => event.type !== HttpEventType.Response),
                map((value: HttpResponse<T>) => {
                    if (isDevMode()) {
                        const log: any = {};
                        if (requestParams.method) {
                            log[requestParams.method.toLowerCase()] = requestParams.url;
                        }
                        log['request'] = { requestParams, httpOptions };
                        log['response'] = value;
                        console.log('http log:', log);
                    }

                    return value;
                }),
                catchError(err => {
                    if (err.status === 400) {
                    }

                    return throwError(err);
                }),
                takeUntil(requestParams.unsubscriber ? merge(this._takeUntil, requestParams.unsubscriber) : this._takeUntil),
                timeout(requestParams.timeout ?? 10000),
                share(),
                first(),
            );

    }

    /**
     * Соответствие ключ-значение по контент-тайпу
     * @param {ContentType} contentType енам
     * @returns {string} Возвращает значение по ключу
     */
    private convertContentType(contentType: ContentType): string {
        const m: Map<ContentType, string> = new Map<ContentType, string>([
            [ContentType.raw, ''],
            [ContentType.json, 'application/json'],
            [ContentType.formUrlEncoded, 'application/x-www-form-urlencoded'],
            [ContentType.multipartFormData, 'multipart/form-data'],
            [ContentType.text, 'text'],
            [ContentType.blob, 'application/octet-stream'],
            [ContentType.imageSvg, 'image/svg+xml'],
        ]);

        return m.get(contentType)!;
    }
}
