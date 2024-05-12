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
