import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-slider-rewind',
    templateUrl: './slider-rewind.component.html',
    styleUrl: './slider-rewind.component.scss'
})
export class SliderRewindComponent {
  @Input()
    public startTime: string = '00:00';

  @Input()
  public endTime: string = '00:00';

  @Input()
  public maxTime: number = 0;

  @Input()
  public currentTime: number = 0;

  @Output()
  public valueChange: EventEmitter<number> = new EventEmitter<number>();

  public formControl: FormControl = new FormControl(this.maxTime);

  constructor() {
      this.formControl.valueChanges.subscribe((value: number) => {
          this.valueChange.emit(value);
      });
  }
}
