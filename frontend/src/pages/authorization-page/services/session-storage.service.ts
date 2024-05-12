import { Injectable } from '@angular/core';
import { IJWTSession } from '../model/jwt-session.interface';

@Injectable()
export class SessionStorageService {
    private _sessionIdentifier: string = 'session';

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
    public removeJWTSession(): void {
        const empty: IJWTSession = { accessToken: '' };
        this.cacheJWTSession(empty);
    }

    /**
     * Получение JWT сессии из localstorage
     * @return {IJWTSession} jwt сессия
     */
    public getJWTSession(): IJWTSession {
        const session: string | null = localStorage.getItem(this._sessionIdentifier);

        if (session === null) {
            this.removeJWTSession();

            return { accessToken: '' };
        }

        return JSON.parse(session) as IJWTSession;
    }
}
