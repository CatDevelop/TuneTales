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
     * Обработчик события изменения значения элемента.
     * @param {Event} event - Событие изменения значения элемента.
     * @emits {string} valueChanged - Генерируется при изменении значения элемента.
     * @returns {void}
     */
    public onChange(value: any): void {
        this.valueChanged.emit(value);
    }
}
