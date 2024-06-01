import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private _bookId: BehaviorSubject<string> = new BehaviorSubject<string>('');
    public data$: Observable<string> = this._bookId.asObservable();

    /**
     * Устанавливает новое значение для _bookId.
     * @param {string} data - Новое значение для установки.
     * @returns {void}
     */
    public setData(data: string): void {
        this._bookId.next(data);
    }

    /**
     * Возвращает текущее значение _bookId.
     * @returns {string} Текущее значение _bookId.
     */
    public getData(): string {
        return this._bookId.value;
    }
}
