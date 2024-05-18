import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-bottom-player-progress',
    templateUrl: './bottom-player-progress.component.html',
    styleUrl: './bottom-player-progress.component.scss'
})
export class BottomPlayerProgressComponent {
    @Input()
    public maxTime: number = 420;

    @Input()
    public currentTime: number = 200;

    public width: string = `${this.currentTime * 100 / this.maxTime}%`;
}
