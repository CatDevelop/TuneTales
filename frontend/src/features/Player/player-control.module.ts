import { NgModule } from '@angular/core';
import { ToglePlayComponent, ToggleRewindComponent } from './ui';
import { PlayerControllersModule } from '../../entities/player';
import { UiKitModule } from '../../shared/ui/ui-kit.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        ToglePlayComponent, ToggleRewindComponent
    ],
    imports: [
        PlayerControllersModule,
        UiKitModule,
        CommonModule,
        HttpClientModule,
    ],
    exports: [
        ToglePlayComponent, ToggleRewindComponent
    ]
})

export class PlayerControlModule {}

