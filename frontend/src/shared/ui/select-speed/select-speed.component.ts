import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-select-speed',
    templateUrl: './select-speed.component.html',
    styleUrl: './select-speed.component.scss'
})
export class SelectSpeedComponent {
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

    public speeds = [
        { speed: 0.75, name: '0.75x' },
        { speed: 1, name: '1x' },
        { speed: 1.25, name: '1.25x' },
        { speed: 1.5, name: '1.5x' },
        { speed: 1.75, name: '1.75x' },
        { speed: 2, name: '2x' },
        { speed: 2.25, name: '2.25x' },
        { speed: 2.5, name: '2.5x' }
    ];

    public defaultSpeed: number = 1;
}
