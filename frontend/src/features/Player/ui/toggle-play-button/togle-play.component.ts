import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-togle-play',
    templateUrl: './togle-play.component.html',
    styleUrl: './togle-play.component.scss'
})
export class ToglePlayComponent {
    public activePlayerUrl: string = '/assets/play-button.svg';
    public pausePlayerUrl: string = '/assets/stop-button.svg';

    @Input()
    public activeButtonState: boolean = false;

    @Output()
        playEvent = new EventEmitter<void>();
    @Output()
        pauseEvent = new EventEmitter<void>();

    public toggleButton = (event: MouseEvent): void => {
        this.activeButtonState = !this.activeButtonState;

        console.log(this.activeButtonState)
        if (this.activeButtonState) {
            this.playEvent.emit();
        } else {
            this.pauseEvent.emit();
        }
    };
}
