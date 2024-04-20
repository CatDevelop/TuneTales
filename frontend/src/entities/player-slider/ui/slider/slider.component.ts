import {ChangeDetectionStrategy, Component, Input, Output} from '@angular/core';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrl: './slider.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent {
    @Input()
        maxTime: number = 10;
    @Input()
        currentTime: number = 0;
    @Output()
        time: number = 0;
}
