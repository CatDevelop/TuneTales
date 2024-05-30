import {ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrl: './slider.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent {
    @Input()
    public maxTime: number = 0;

    @Input()
    public currentTime: number = 0;

    @Input()
    public control: FormControl = new FormControl(0);


}
