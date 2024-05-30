import { Component, EventEmitter, Input, OnInit, OnChanges, SimpleChanges, Output, ViewChild } from '@angular/core';

@Component({
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

  @ViewChild('sliderInput', { static: true }) slider: any;

  ngOnInit() {
    this.updateSliderProperties();
  }

  ngOnChanges(changes: any) {
    if (changes.maxTime || changes.currentTime) {
      this.updateSliderProperties();
    }
  }

  updateSliderProperties() {
    const input = this.slider.nativeElement as HTMLInputElement;
    const percentage = (this.currentTime / this.maxTime) * 100;
    input.style.setProperty('--value', `${percentage}`);
    input.style.setProperty('--min', `0`);
    input.style.setProperty('--max', `100`);
  }

  updateSlider(event: Event) {
    const input = event.target as HTMLInputElement;
    const percentage = Number(input.value);
    const newValue = (percentage / 100) * this.maxTime;
    input.style.setProperty('--value', input.value);
    this.valueChange.emit(newValue);
  } 
}
