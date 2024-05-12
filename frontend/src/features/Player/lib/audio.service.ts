import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject, Subject, timer, take, map, takeWhile, finalize, Subscription} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import moment from 'moment';
import { IStreamState } from '../model/types';

@Injectable({
    providedIn: 'root'
})
export class AudioService {

    private audioObj: any;

    private _stop: Subject<void> = new Subject<void>();

    private _audioEvents: string[] = [
        'ended', 'error', 'play', 'playing', 'pause', 'timeupdate', 'canplay', 'loadedmetadata', 'loadstart'
    ];

    private _state: IStreamState = {
        playing: false,
        readableCurrentTime: '',
        readableDuration: '',
        duration: undefined,
        currentTime: undefined,
        canplay: false,
        error: false,
    };

    private _stateChange: BehaviorSubject<IStreamState> = new BehaviorSubject<IStreamState>(this._state);


    /**
     * Инициализация объекта Audio.
     * @returns {void}
     */
    public init(): void {
        this.audioObj = new Audio();
    }

    /**
     * Воспроизводит аудио по указанному URL.
     *
     * @param {string} url - URL аудиопотока для воспроизведения.
     * @returns {Observable<Event>} - Объект Observable, который испускает события во время воспроизведения аудиопотока.
     */
    public playStream(url: string): Observable<Event> {
        return this.streamObservable(url).pipe(takeUntil(this._stop));
    }

    /**
     * Воспроизводит аудио.
     * @returns {void}
     */
    public play(): void {
        this.audioObj.play();
    }

    /**
     * Ставит аудио на паузу.
     * @returns {void}
     */
    public pause(): void {
        this.audioObj.pause();
    }

    /**
     * Останавливает воспроизведение аудио.
     * @returns {void}
     */
    public stop(): void {
        this._stop.next();
    }

    /**
     * Перематывает аудио к указанному моменту времени в секундах.
     * @param {number} seconds - Время в секундах, к которому нужно перемотать аудио.
     * @returns {void}
     */
    public seekTo(seconds: number): void {
        this.audioObj.currentTime = seconds;
    }

    /**
     * Устанавливает скорость проигрывания аудио.
     * @param {number} speed - Скорость проигрывания
     * @returns {void}
     */
    public speed(value: number): void {
        this.audioObj.playbackRate = value;
    }

    /**
     * Устанавливает таймер сна на указанное количество секунд.
     * @param {number} seconds - Количество секунд для установки таймера.
     */
    public sleepTimer(seconds: number): Observable<string> {
        return timer(0, 100).pipe(
            take(seconds + 1),
            map((tick) => seconds - tick),
            takeWhile(time => time >= 0),
            map((time) => this.formatTime(time, seconds > 3600 ? 'hh:mm:ss' : 'mm:ss'))
        );
    }

    /**
     * Форматирует время в миллисекундах в заданный формат.
     * @param {number} [time=0] - Время в миллисекундах.
     * @param {string} [format='HH:mm:ss'] - Формат времени.
     * @returns {string} Отформатированное время.
     */
    public formatTime(time: number = 0, format: string = 'mm:ss'): any {
        const momentTime: number = time * 1000;
        return moment.utc(momentTime).format(format);
    }

    /**
     * Получает текущее состояние аудио как Observable.
     * @returns {Observable<IStreamState>} Observable, возвращающий состояние аудио.
     */
    public getState(): Observable<IStreamState> {
        return this._stateChange.asObservable();
    }

    /**
     * Создает Observable для воспроизведения аудио из заданного URL.
     * @param {string} url - URL аудиофайла для воспроизведения.
     * @returns {Observable<Event>} Observable для отслеживания событий аудиоплеера.
     */
    private streamObservable(url: string): Observable<Event> {
        return new Observable(observer => {
            this.audioObj.src = url;
            this.audioObj.load();
            this.audioObj.play();

            const handler = (event: Event): void => {
                this.updateStateEvents(event);
                observer.next(event);
            };

            this.addEvents(this.audioObj, this._audioEvents, handler);

            return () => {
                this.audioObj.pause();
                this.audioObj.currentTime = 0;

                this.removeEvents(this.audioObj, this._audioEvents, handler);

                this.resetState();
            };
        });
    }

    /**
     * Добавляет обработчики событий к указанному объекту для заданных событий.
     *
     * @private
     * @param {any} obj - Объект, к которому будут добавлены обработчики событий.
     * @param {string[]} events - Массив названий событий, на которые нужно подписаться.
     * @param {(event: Event) => void} handler - Функция, которая будет выполнена при срабатывании события.
     *   Она принимает объект события в качестве параметра.
     * @returns {void}
     */
    private addEvents(obj: any, events: string[], handler: (event: Event) => void): void {
        events.forEach(event => {
            obj.addEventListener(event, handler);
        });
    }

    /**
     * Удаляет обработчики событий с указанного объекта для заданных событий.
     *
     * @private
     * @param {any} obj - Объект, с которого нужно удалить обработчики событий.
     * @param {string[]} events - Массив названий событий, для которых нужно удалить обработчики.
     * @param {(event: Event) => void} handler - Функция-обработчик, которая была привязана к событиям.
     *   Она принимает объект события в качестве параметра.
     * @returns {void}
     */
    private removeEvents(obj: any, events: string[], handler: (event: Event) => void): void {
        events.forEach(event => {
            obj.removeEventListener(event, handler);
        });
    }

    /**
     * Обновляет состояние аудиоплеера на основе события.
     * @param {Event} event - Событие, используемое для обновления состояния.
     * @returns {void}
     * @private
     */
    private updateStateEvents(event: Event): void {
        switch (event.type) {
            case 'canplay':
                this._state.duration = this.audioObj.duration;
                this._state.readableDuration = this.formatTime(this._state.duration);
                this._state.canplay = true;
                break;
            case 'playing':
                this._state.playing = true;
                break;
            case 'pause':
                this._state.playing = false;
                break;
            case 'timeupdate':
                this._state.currentTime = this.audioObj.currentTime;
                this._state.readableCurrentTime = this.formatTime(this._state.currentTime);
                break;
            case 'error':
                this.resetState();
                this._state.error = true;
                break;
        }

        this._stateChange.next(this._state);
    }

    /**
     * Сбрасывает состояние аудиоплеера, устанавливая его в начальное значение.
     * @returns {void}
     * @private
     */
    private resetState(): void {
        this._state = {
            playing: false,
            readableCurrentTime: '',
            readableDuration: '',
            duration: undefined,
            currentTime: undefined,
            canplay: false,
            error: false
        };
    }
}
