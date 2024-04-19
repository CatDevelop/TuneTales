import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ContentType } from './content-type';
import { RequestMethodType } from './request-method';
import { RequestResponseType } from './response-type';

export interface IRequestOptions<T = null> {
    url: string;
    method?: RequestMethodType;
    timeout?: number;
    params?: string | URLSearchParams | {
        [key: string]: string | string[] | number | number[];
    };
    headers?: HttpHeaders;
    withCredentials?: boolean;
    responseType?: RequestResponseType;
    unsubscriber?: Subject<void>,
    contentType?: ContentType,
    auth?: boolean,
    body?: T | null;
}
