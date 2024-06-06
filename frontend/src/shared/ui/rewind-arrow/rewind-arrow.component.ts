import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-rewind-arrow',
    templateUrl: './rewind-arrow.component.html',
    styleUrls: ['./rewind-arrow.component.scss']
})
export class RewindArrowComponent {
    @Input()
    public type: 'left' | 'right' = 'left';

    @Output()
    public eventClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    private _size: 'small' | 'medium' = 'medium';

    @Input()
    public set size(value: 'small' | 'medium') {
        this._size = value;
        this.updateDimensions();
    }

    public get size(): 'small' | 'medium' {
        return this._size;
    }

    public widthButton: number = 42;
    public heightButton: number = 42;

    public widthContainer: number = this.widthButton;
    public heightContainer: number = this.heightButton;

    public activeButton: boolean = false;

    constructor() {
        this.updateDimensions();
    }

    /**
     * Уменьшает размеры кнопки на 4 пикселя.
     */
    public shrink(): void {
        this.widthButton -= 4;
        this.heightButton -= 4;
    }

    /**
     * Восстанавливает размеры кнопки, увеличивая их на 4 пикселя.
     */
    public restore(): void {
        this.widthButton += 4;
        this.heightButton += 4;
    }

    /**
     * Переключает состояние кнопки
     * @param event Событие клика мыши.
     */
    public toggleButton(event: MouseEvent): void {
        this.activeButton = !this.activeButton;
        this.eventClick.emit(event);
    }

    /**
     * Обновляет размеры кнопки и контейнера в зависимости от заданного размера.
     */
    private updateDimensions(): void {
        if (this._size === 'small') {
            this.widthButton = 24;
            this.heightButton = 24;
            this.widthContainer = 24;
            this.heightContainer = 24;
        } else if (this._size === 'medium') {
            this.widthButton = 42;
            this.heightButton = 42;
            this.widthContainer = 42;
            this.heightContainer = 42;
        }
    }
}
