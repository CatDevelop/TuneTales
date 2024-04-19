import { Injectable } from '@angular/core';
import { UserSession } from '../model/UserSession';
import { IJWTSession } from '../model/iJWTSession';

@Injectable({
    providedIn: 'root'
})
export class SessionStorageService {
    private _sessionIdentifier: string = 'session';

    constructor() {}

    /**
     * Запись JWT сессиии в localstorage
     * @param session
     */
    public cacheJWTSession(session: IJWTSession): void {
        localStorage.setItem(this._sessionIdentifier, JSON.stringify(session));
    }

    /**
     * Очистка текущую JWT сессию
     * @return {IJWTSession} пустая JWT сессия
     */
    public removeJWTSession(): IJWTSession {
        const empty: IJWTSession = { accessToken: '' };
        this.cacheJWTSession(empty);

        return empty;
    }

    /**
     * Получение JWT сессии из localstorage
     * @return {IJWTSession} jwt сессия
     */
    public getJWTSession(): IJWTSession {
        const session: string | null = localStorage.getItem(this._sessionIdentifier);

        if (session === null) {
            return this.removeJWTSession();
        }

        return (JSON.parse(session) as IJWTSession);
    }

    /**
     * Получение текущей jwt сессии пользователя
     * @return {UserSession} user session
     */
    public getJWTInfo(): UserSession {
        const jwtSession: IJWTSession = this.getJWTSession();

        if (!jwtSession || !jwtSession.accessToken) {
            return new UserSession();
        }

        const newObj: Object = this.parseJwt(jwtSession.accessToken);
        const session: UserSession = new UserSession;
        Object.assign(session, newObj);

        return session;
    }

    /**
     * Парсинг JWT токена
     * @param token
     * @return {string} jsonify jwt token
     */
    public parseJwt(token: string): object {
        const base64Url: string = token.split('.')[1];
        const base64: string = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload: string = decodeURIComponent(atob(base64).split('').map(function(c: string) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };
}
