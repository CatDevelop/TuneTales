import { Injectable } from '@angular/core';
import {filter, map, Observable, of, take} from 'rxjs';
import { PlayerControlModule } from '../player-control.module';
import { HttpService  } from '../../../shared/global-services/request/http.service';
import { RequestMethodType } from '../../../shared/global-services/request/model/request-method';
import { UrlRoutes } from '../../../shared/global-services/request/model/url-routes';
import { HttpResponse } from '@angular/common/http';
import { IGetBookResponseDto } from '../../../entities/Book/model/dto/response/get-book.response-dto';

@Injectable({
    providedIn: PlayerControlModule
})
export class CloudService {
    constructor(private _req: HttpService) { }

    /**
     * Получает книгу по её ID.
     *
     * @param {string} bookId - Идентификатор книги.
     * @returns {Observable<IBook>} Observable с данными книги.
     */
    public getBook(bookId: string): Observable<IGetBookResponseDto> {
        const response$: Observable<any> = this._req.request<IGetBookResponseDto, any>({
            url: `${UrlRoutes.backendDev}/book/${bookId}`,
            method: RequestMethodType.get
        }).pipe(
            filter((resp: HttpResponse<IGetBookResponseDto>) => resp.ok),
            map((resp: HttpResponse<IGetBookResponseDto>) => resp.body),
            take(1)
        );

        return response$;
    }
}
