import { NgModule } from '@angular/core';
import { ToglePlayComponent, ToggleRewindComponent } from './ui';
import { PlayerControllersModule } from '../../entities/player';
import { UiKitModule } from '../../shared/ui/ui-kit.module';


@NgModule({
    declarations: [
        ToglePlayComponent, ToggleRewindComponent
    ],
    imports: [
        PlayerControllersModule, UiKitModule
    ],
    exports: [
        ToglePlayComponent, ToggleRewindComponent
    ],
})

export class PlayerControlModule {}

