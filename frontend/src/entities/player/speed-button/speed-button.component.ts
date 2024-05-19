import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-speed-button',
    templateUrl: './speed-button.component.html',
    styleUrl: './speed-button.component.scss'
})
export class SpeedButtonComponent {
    @Input()
    public speedButtonState: number | undefined = undefined;

    @Output()
    public valueChanged: EventEmitter<number> = new EventEmitter<number>();

    /**
     * Генерирует событие при изменении значения.
     *
     * @param {number} value - Новое значение, которое необходимо передать в событие.
     * @returns {void} Метод не возвращает значения.
     */
    public onChange(value: number): void {
        this.valueChanged.emit(value);
    }
}
