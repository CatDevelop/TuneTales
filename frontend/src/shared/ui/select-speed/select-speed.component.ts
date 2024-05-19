import { Component, EventEmitter, Output } from '@angular/core';
import { ISpeedEntry } from '../../model/types';

@Component({
    selector: 'app-select-speed',
    templateUrl: './select-speed.component.html',
    styleUrl: './select-speed.component.scss'
})
export class SelectSpeedComponent {
    public speeds: ISpeedEntry[] = [
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

    @Output()
    public valueChanged: EventEmitter<number> = new EventEmitter<number>();

    /**
     * Обработчик события изменения значения элемента.
     * @param {Event} event - Событие изменения значения элемента.
     * @emits {string} valueChanged - Генерируется при изменении значения элемента.
     * @returns {void}
     */
    public onChange(event: MouseEvent | Event): void {
        this.valueChanged.emit(Number((event?.target as HTMLInputElement).value));
    }
}
