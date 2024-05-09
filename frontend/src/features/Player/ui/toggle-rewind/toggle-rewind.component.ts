import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-toggle-rewind',
    templateUrl: './toggle-rewind.component.html',
    styleUrl: './toggle-rewind.component.scss'
})
export class ToggleRewindComponent {
    @Input()
        type: string = 'left';

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
