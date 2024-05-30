import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-bottom-player-progress',
    templateUrl: './bottom-player-progress.component.html',
    styleUrl: './bottom-player-progress.component.scss'
})
export class BottomPlayerProgressComponent implements OnChanges {
    @Input()
    public maxTime: number = 1;

    @Input()
    public currentTime: number = 0;

    public width: string = '0%';

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes['maxTime'] || changes['currentTime']) {
            this.calculateWidth();
        }
    }

    /**
     * Расчет ширины в процентах относительно maxTime.
     * @private
     */
    private calculateWidth(): void {
        this.width = `${this.currentTime * 100 / this.maxTime}%`;
    }
}
