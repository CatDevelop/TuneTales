import { NgModule } from '@angular/core';
import { ToglePlayComponent, ToggleRewindComponent } from './ui';
import { PlayerControllersModule } from '../../entities/player';
import { UiKitModule } from '../../shared/ui/ui-kit.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ToglePlayComponent, ToggleRewindComponent
    ],
    imports: [
        PlayerControllersModule,
        UiKitModule,
        CommonModule
    ],
    exports: [
        ToglePlayComponent, ToggleRewindComponent
    ],
})

export class PlayerControlModule {}

