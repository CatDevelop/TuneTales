import { Component } from '@angular/core';
import { interval, Observable, takeUntil } from "rxjs";

@Component({
    selector: 'app-click-left-rewind',
    templateUrl: './click-left-rewind.component.html',
    styleUrl: './click-left-rewind.component.scss'
})
export class ClickLeftRewindComponent {
    public activeButtonState: boolean = false;
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

    public toggleButton = (): void => {
        this.activeButtonState = !this.activeButtonState;
    };
}
