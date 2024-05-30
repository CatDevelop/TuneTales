import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-play-button',
    templateUrl: './play-button.component.html',
    styleUrl: './play-button.component.scss'
})
export class PlayButtonComponent {
    @Input()
    public activeButton: boolean = false;

    @Output()
    public playEvent = new EventEmitter<void>();

    @Output()
    public eventClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    public onClickButton = (event: MouseEvent): void => {
        this.activeButton = !this.activeButton;
        this.eventClick.emit(event);
    };
}
