import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-play-button',
    templateUrl: './play-button.component.html',
    styleUrl: './play-button.component.scss'
})
export class PlayButtonComponent {
    @Input()
    public activeButton: boolean = false;

    @Output()
    public playEvent: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    public eventClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    public onClickButton = (event: MouseEvent): void => {
        this.activeButton = !this.activeButton;
        this.eventClick.emit(event);
    };
}
