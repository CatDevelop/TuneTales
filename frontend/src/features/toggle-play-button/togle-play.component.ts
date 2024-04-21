import { Component } from '@angular/core';

@Component({
    selector: 'app-togle-play',
    templateUrl: './togle-play.component.html',
    styleUrl: './togle-play.component.scss'
})
export class ToglePlayComponent {
    public activePlayerUrl: string = '/assets/play-button.svg';
    public pausePlayerUrl: string = '/assets/stop-button.svg';

    public activeButtonState: boolean = false;

    public toggleButton = (event: MouseEvent): void => {
        this.activeButtonState = !this.activeButtonState;
    };
}
