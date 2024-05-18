import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-sleep-timer',
    templateUrl: './sleep-timer.component.html',
    styleUrl: './sleep-timer.component.scss'
})
export class SleepTimerComponent {
    @Input()
    public sleepTimerState: string | undefined = undefined;

    @Output()
    public valueChanged = new EventEmitter<number>();

    /**
     * Генерирует событие при изменении значения.
     *
     * @param {number} value - Новое значение для генерации события.
     * @returns {void}
     */
    public onChange(value: number): void {
        this.valueChanged.emit(value);
    }
}
