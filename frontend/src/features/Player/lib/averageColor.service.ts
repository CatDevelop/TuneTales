import { Injectable } from '@angular/core';
import { PlayerControlModule } from '../player-control.module';
import { FastAverageColor } from 'fast-average-color';
import { Observable, from, map, of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

@Injectable({
    providedIn: PlayerControlModule
})
export class AverageColorService {
    constructor() { }

    /**
     * Получает средний цвет изображения по URL.
     *
     * @param {string} imgUrl - URL изображения.
     * @returns {Observable<string>} Возвращает Observable, который испускает средний цвет изображения в формате HEX.
     */
    public getAverageColor(imgUrl: string): Observable<string>{
        const fac: FastAverageColor = new FastAverageColor();

        return from(fac.getColorAsync(imgUrl))
            .pipe(
                map(n => n.hex),
                take(1),
                catchError(err => {
                    return of('#fff');
                })
            );
    }
}
