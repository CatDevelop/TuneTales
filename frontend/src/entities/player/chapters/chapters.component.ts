import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import moment from 'moment/moment';
import { IAudioChapter } from '../../../shared/model/types';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-chapters',
    templateUrl: './chapters.component.html',
    styleUrl: './chapters.component.scss'
})
export class ChaptersComponent {
    @Input()
    public files!: IAudioChapter[];

    @Input()
    public currentIndexFile: number = 0;

    @Output()
    public valueChanged: EventEmitter<{ file: IAudioChapter; index: number }> = new EventEmitter<{ file: IAudioChapter, index: number }>();

    @Output()
    public stateChapterChanged: EventEmitter<any> = new EventEmitter();

    /**
     * Обрабатывает событие изменения значения элемента.
     * @param {IAudioChapter} file - Объект файла.
     * @param {int} index - Индекс файла.
     * @emits {string} valueChanged - Срабатывает при изменении значения элемента.
     * @returns {void}
     */
    public onChange(file: IAudioChapter, index: number): void {
        this.valueChanged.emit({ file, index });
    }

    /**
     * Переключает состояние главы.
     * @emits {void} stateChapterChanged - Срабатывает при изменении состояния главы.
     * @returns {void}
     */
    public toggleChapter(): void {
        this.stateChapterChanged.emit();
    }

    /**
     * Форматирует время из секунд в указанный формат.
     * @param {number} time - Время в секундах.
     * @returns {string} - Отформатированное время.
     */
    public formatTime(time: number): string {
        const momentTime: number = time * 1000;

        return moment.utc(momentTime).format(time > 3600 ? 'hh:mm:ss' : 'mm:ss');
    }
}
