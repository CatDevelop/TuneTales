import { HttpHeaders } from '@angular/common/http';
import { RequestResponseType } from './response-type';

export interface IHttpOptions {
    headers?: HttpHeaders;
    reportProgress?: boolean;
    responseType?: RequestResponseType;
    withCredentials?: boolean;
}
