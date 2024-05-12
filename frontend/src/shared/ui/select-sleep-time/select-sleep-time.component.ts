import {Component, EventEmitter, Output} from '@angular/core';
import moment from "moment";

@Component({
    selector: 'app-select-sleep-time',
    templateUrl: './select-sleep-time.component.html',
    styleUrl: './select-sleep-time.component.scss'
})
export class SelectSleepTimeComponent {
    @Output()
    public valueChanged = new EventEmitter<number>();

    /**
     * Обработчик события изменения значения элемента.
     * @param {Event} event - Событие изменения значения элемента.
     * @emits {string} valueChanged - Генерируется при изменении значения элемента.
     * @returns {void}
     */
    public onChange(event: any): void {
        this.valueChanged.emit(event.target.value);
    }

    public times = [
        { time: 60, name: '1 минута' },
        { time: 900, name: '15 минут' },
        { time: 1800, name: '30 минут' },
        { time: 2700, name: '45 минут' },
        { time: 3600, name: '1 час' },
        { time: 7200, name: '2 часа' },
        { time: 0, name: 'Отменить' },
    ];

    public defaultTime: number = 0;
}
