import { NgModule } from '@angular/core';
import { PlayerControllersModule } from '../../entities/player';
import { UiKitModule } from '../../shared/ui/ui-kit.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FullPlayerComponent } from './components/full-player/full-player.component';
import { BottomPlayerComponent } from './components/bottom-player/bottom-player.component';

@NgModule({
    declarations: [
        FullPlayerComponent,
        BottomPlayerComponent
    ],
    imports: [
        PlayerControllersModule,
        UiKitModule,
        CommonModule,
        HttpClientModule,
    ],
    exports: [
        FullPlayerComponent,
        BottomPlayerComponent
    ]
})

export class PlayerControlModule {}

