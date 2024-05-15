import { NgModule } from '@angular/core';
import { ButtonComponent } from './player-button/button.component';
import { SelectSleepTimeComponent } from './select-sleep-time/select-sleep-time.component';
import { SelectSpeedComponent } from './select-speed/select-speed.component';
import { SliderComponent } from './slider/slider.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiDataListWrapperModule, TuiInputModule, TuiSelectModule, TuiSliderModule } from '@taiga-ui/kit';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        FormsModule,
        TuiSelectModule,
        TuiInputModule,
        TuiSliderModule,
        TuiDataListWrapperModule,
        ReactiveFormsModule,
        BrowserModule
    ],
    declarations: [
        SelectSleepTimeComponent,
        SelectSpeedComponent,
        SliderComponent,
        ButtonComponent
    ],
    exports: [
        SelectSleepTimeComponent,
        SelectSpeedComponent,
        SliderComponent,
        ButtonComponent
    ]
})

export class UiKitModule {}
