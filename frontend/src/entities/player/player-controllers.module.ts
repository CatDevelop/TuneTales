import { NgModule } from '@angular/core';
import { SliderRewindComponent } from './slider-rewind';
import { ChaptersComponent } from './chapters';

import { UiKitModule } from '../../shared/ui/ui-kit.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SliderRewindComponent,
        ChaptersComponent,
    ],
    imports: [
        UiKitModule,
        CommonModule
    ],
    exports: [
        SliderRewindComponent,
        ChaptersComponent
    ],
})

export class PlayerControllersModule {}
