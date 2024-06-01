import { Component, ChangeDetectorRef, Input, ViewChild, ElementRef, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { AudioService } from '../../features/Player';
import { CloudService } from '../../features/Player';
import { IStreamState } from '../../features/Player';
import { AverageColorService } from '../../features/Player/lib/averageColor.service';
import { filter, Subscription, switchMap, take, tap } from 'rxjs';
import { IAudioChapter } from '../../shared/model/types';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DataService } from '../../shared/lib/playerData.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrl: './player.component.scss'
})
export class PlayerComponent  {
    @ViewChild('bookImage', { static: false })
    public bookImage!: ElementRef;

    @Input()
    public bookId: string = '8d419c91-442a-4143-ac89-98289c73bc55';

    public files: IAudioChapter[] = [];
    public imageUrl: string = '';
    public nameBook: string = '';
    public backgrondColor: string = '#fffff';

    public state: IStreamState = {
        playing: false,
        readableCurrentTime: '',
        readableDuration: '',
        duration: undefined,
        currentTime: undefined,
        canplay: false,
        error: false,
    };
    public currentFile: {index: number, file: IAudioChapter } | undefined = undefined;

    private _sleepTimerSubscription: Subscription | undefined = undefined;

    public sleepTimerButton: string | undefined = undefined;
    public speedButton: number | undefined = 1;
    public chapterWindow: boolean = false;

    public playerWindow: 'full' | 'bottom' | 'none' = 'none';


    constructor(
        private _audioService: AudioService,
        cloudService: CloudService,
        private _cdr: ChangeDetectorRef,
        private _averageColor: AverageColorService,
        private _destroyRef: DestroyRef,
        private _dataService: DataService
    ) {

        this._dataService.data$.pipe(
            filter(data => !!data),
            switchMap(data => cloudService.getBook(data)),
            tap(book => {
                this.files = book.parts;
                this.nameBook = book.name;
                this.imageUrl = book.imageSrc;

                this._audioService.init();
                this.openFile(this.files[0], 0);
                this.pause();
            }),
            switchMap(book => this._averageColor.getAverageColor(this.imageUrl)),
            tap(hex => {
                this.backgrondColor = hex;
                this.playerWindow = 'bottom';
            }),
            takeUntilDestroyed(this._destroyRef)
        ).subscribe();


        this._audioService.getState()
            .subscribe(state => {
                this.state = state;
            });
    }

    /**
     * Воспроизводит поток аудио по URL.
     * @param {string} url - URL аудиопотока.
     */
    public playStream(url: string): void {
        this._audioService.playStream(url).subscribe(events => {
            this._cdr.detectChanges();

            if (this.state.playing && this.state.currentTime === this.state.duration) {
                this.next();
            }
        });
    }

    /**
     * Открывает файл для воспроизведения.
     * @param {IAudioChapter} file - Аудиофайл.
     * @param {number} index - Индекс файла в списке.
     */
    public openFile(file: IAudioChapter, index: number): void {
        this.currentFile = { index, file };
        this._audioService.stop();
        this.playStream(file.audioSrc);
    }

    /**
     * Ставит воспроизведение на паузу.
     */
    public pause(): void {
        this._audioService.pause();
    }

    /**
     * Возобновляет воспроизведение.
     */
    public play(): void {
        this._audioService.play();
    }

    /**
     * Устанавливает скорость воспроизведения.
     * @param {number} value - Новая скорость.
     */
    public speed(value: number): void {
        this.speedButton = value;
        this._audioService.speed(value);
    }

    /**
     * Устанавливает громкость аудио.
     * @param {number} volume - Уровень громкости от 0 до 1.
     * @returns {void}
     */
    public setVolume(value: number): void {
        this._audioService.setVolume(value);
    }

    /**
     * Устанавливает таймер сна.
     * @param {number} value - Время в минутах.
     */
    public sleepTimer(value: number): void {
        console.log(value);
        if (this._sleepTimerSubscription) {
            this._sleepTimerSubscription.unsubscribe();
        }

        this._sleepTimerSubscription = this._audioService.sleepTimer(value).subscribe(n => {
            this._cdr.detectChanges();
            this.sleepTimerButton = n;

            if (n === '00:00') {
                this.sleepTimerButton = undefined;
                this.pause();
            }
        });
    }

    /**
     * Останавливает воспроизведение.
     */
    public stop(): void {
        this._audioService.stop();
        this.playerWindow = 'none';
    }

    /**
     * Воспроизводит следующий файл в списке.
     */
    public next(): void {
        if (this.currentFile && this.currentFile?.index + 1) {
            const index: number = this.currentFile.index + 1;
            const file: IAudioChapter = this.files[index];
            this.openFile(file, index);
        }
    }

    /**
     * Воспроизводит предыдущий файл в списке.
     */
    public previous(): void {
        if (this.currentFile && this.currentFile?.index - 1) {
            const index: number = this.currentFile.index - 1;
            const file: IAudioChapter = this.files[index];
            this.openFile(file, index);
        }
    }

    /**
     * Обрабатывает изменение значения слайдера.
     * @param {number} value - Новое значение слайдера.
     */
    public onSliderChangeEnd(value: number): void {
        this._audioService.seekTo(value);
    }

    /**
     * Перематывает аудио назад на заданное количество секунд.
     * @param {number} value - Время перемотки в секундах.
     */
    public audioRewindBack(value: number): void {
        if (this.state.currentTime) {
            this._audioService.seekTo(Math.max(this.state.currentTime - value, 0));
        }
    }

    /**
     * Перематывает аудио вперед на заданное количество секунд.
     * @param {number} value - Время перемотки в секундах.
     */
    public audioRewindNext(value: number): void {
        if (this.state.currentTime && this.state.duration) {
            this._audioService.seekTo(Math.min(this.state.currentTime + value, this.state.duration));
        }
    }

    /**
     * Переключает состояние окна выбора главы.
     */
    public toggleChapter(): void {
        this.chapterWindow = !this.chapterWindow;
    }

    /**
     * Переключает состояние окна плеера.
     */
    public togglePlayerWindow(): void {
        if (this.playerWindow === 'bottom') {
            this.playerWindow = 'full';
        } else {
            this.playerWindow = 'bottom';
        }
    }
}
