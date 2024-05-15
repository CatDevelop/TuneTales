import { NgModule } from '@angular/core';
import { PlayerComponent } from './player.component';
import { CommonModule } from '@angular/common';
import { PlayerControlModule } from '../../features/Player';
import { PlayerControllersModule } from '../../entities/player';
import { UiKitModule } from '../../shared/ui/ui-kit.module';

@NgModule({
    imports: [
        CommonModule,
        PlayerControlModule,
        PlayerControllersModule,
        UiKitModule
    ],
    declarations: [
        PlayerComponent
    ],
    exports: [
        PlayerComponent
    ]
})

export class PlayerModule { }
