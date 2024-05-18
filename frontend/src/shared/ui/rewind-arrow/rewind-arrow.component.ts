import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-rewind-arrow',
    templateUrl: './rewind-arrow.component.html',
    styleUrl: './rewind-arrow.component.scss'
})
export class RewindArrowComponent {
    @Input()
    public type: 'left' | 'right' = 'left';

    @Output()
    public eventClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    public activeButton: boolean = false;
    public widhtButton: number = 42;
    public heihtButton: number = 42;

    public shrink = (): void => {
        this.widhtButton = 38;
        this.heihtButton = 38;
    };

    public restore = (): void => {
        this.widhtButton = 42;
        this.heihtButton = 42;
    };

    public toggleButton = (event: MouseEvent): void => {
        this.activeButton = !this.activeButton;
        this.eventClick.emit(event);
    };
}
