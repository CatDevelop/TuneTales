import { Component } from '@angular/core';

@Component({
    selector: 'app-click-right-rewind',
    templateUrl: './click-right-rewind.component.html',
    styleUrl: './click-right-rewind.component.scss'
})
export class ClickRightRewindComponent {
    public activeButtonState: boolean = false;

    public toggleButton = (): void => {
        this.activeButtonState = !this.activeButtonState;
    };
}
