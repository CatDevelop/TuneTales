import { NgModule } from '@angular/core';
import { SliderRewindComponent } from './slider-rewind';
import { SleepTimerComponent } from './sleep-timer';
import { SpeedButtonComponent } from './speed-button';
import { ChaptersComponent } from './chapters';

import { UiKitModule } from '../../shared/ui/ui-kit.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SliderRewindComponent,
        SleepTimerComponent,
        SpeedButtonComponent,
        ChaptersComponent,
    ],
    imports: [
        UiKitModule,
        CommonModule
    ],
    exports: [
        SliderRewindComponent,
        SleepTimerComponent,
        SpeedButtonComponent,
        ChaptersComponent
    ],
})

export class PlayerControllersModule {}
