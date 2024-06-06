import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-desktop-slider-rewind',
    templateUrl: './desktop-slider-rewind.component.html',
    styleUrls: ['./desktop-slider-rewind.component.scss']
})
export class DesktopSliderRewindComponent implements OnInit, OnChanges {
    @Input()
    public startTime: string = '00:00';

    @Input()
    public endTime: string = '00:00';

    @Input()
    public maxTime: number = 100;

    @Input()
    public currentTime: number = 0;

    @Output()
    public valueChange: EventEmitter<number> = new EventEmitter<number>();

    @ViewChild('sliderInput', { static: true })
    public slider: any;

    public ngOnInit(): void {
        this.updateSliderProperties();
    }

    public ngOnChanges(changes: any): void  {
        if (changes.maxTime || changes.currentTime) {
            this.updateSliderProperties();
        }
    }

    /**
     * Обновление свойств слайдера
     */
    public updateSliderProperties(): void  {
        const input: HTMLInputElement = this.slider.nativeElement as HTMLInputElement;
        const percentage: number = (this.currentTime / this.maxTime) * 100;
        input.style.setProperty('--value', `${percentage}`);
        input.style.setProperty('--min', `0`);
        input.style.setProperty('--max', `100`);
    }

    /**
     * Обновление слайдера
     */
    public updateSlider(event: Event): void  {
        const input: HTMLInputElement = event.target as HTMLInputElement;
        const percentage: number = Number(input.value);
        const newValue: number = (percentage / 100) * this.maxTime;
        input.style.setProperty('--value', input.value);
        this.valueChange.emit(newValue);
    }
}
