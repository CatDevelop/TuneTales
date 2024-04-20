import { Injectable } from '@angular/core';
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
}
