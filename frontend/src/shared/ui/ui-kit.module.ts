import { NgModule } from '@angular/core';
import { ButtonComponent } from './player-button/button.component';
import { SelectSleepTimeComponent } from './select-sleep-time/select-sleep-time.component';
import { SelectSpeedComponent } from './select-speed/select-speed.component';
import { SliderComponent } from './slider/slider.component';
import { SmallPlayButtonComponent } from './small-play-button/small-play-button.component';
import { ClosePlayerComponent } from './close-player/close-player.component';
import { BottomPlayerProgressComponent } from './bottom-player-progress/bottom-player-progress.component';
import { PlayButtonComponent } from './play-button/play-button.component';
import { RewindArrowComponent } from './rewind-arrow/rewind-arrow.component';
import { SelectSoundComponent } from './select-sound/select-sound.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiDataListWrapperModule, TuiInputModule, TuiSelectModule, TuiSliderModule } from '@taiga-ui/kit';
import {
    TuiDataListModule,
    TuiDropdownModule, TuiHintModule, TuiHostedDropdownModule,
    TuiLabelModule,
    TuiRootModule,
    TuiTextfieldControllerModule
} from '@taiga-ui/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        TuiSelectModule,
        TuiInputModule,
        TuiSliderModule,
        TuiDataListWrapperModule,
        TuiDataListModule,
        ReactiveFormsModule,
        BrowserModule,
        CommonModule,
        TuiLabelModule,
        TuiDropdownModule,
        TuiRootModule,
        TuiTextfieldControllerModule,
        TuiHostedDropdownModule,
        TuiHintModule
    ],
    declarations: [
        SelectSleepTimeComponent,
        SelectSpeedComponent,
        SliderComponent,
        ButtonComponent,
        SmallPlayButtonComponent,
        ClosePlayerComponent,
        BottomPlayerProgressComponent,
        PlayButtonComponent,
        RewindArrowComponent,
        SelectSoundComponent
    ],
    exports: [
        SelectSleepTimeComponent,
        SelectSpeedComponent,
        SliderComponent,
        ButtonComponent,
        SmallPlayButtonComponent,
        ClosePlayerComponent,
        BottomPlayerProgressComponent,
        PlayButtonComponent,
        RewindArrowComponent,
        SelectSoundComponent
    ]
})

export class UiKitModule {}
