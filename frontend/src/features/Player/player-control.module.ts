import { NgModule } from '@angular/core';
import { PlayerControllersModule } from '../../entities/player';
import { UiKitModule } from '../../shared/ui/ui-kit.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FullPlayerComponent } from './components/full-player/full-player.component';
import { BottomPlayerComponent } from './components/bottom-player/bottom-player.component';
import { DesktopPlayerComponent } from './components/desktop-player/desktop-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiSelectModule } from '@taiga-ui/kit';


@NgModule({
    declarations: [
        FullPlayerComponent,
        BottomPlayerComponent,
        DesktopPlayerComponent
    ],
    imports: [
        PlayerControllersModule,
        UiKitModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        TuiSelectModule,
    ],
    exports: [
        FullPlayerComponent,
        BottomPlayerComponent,
        DesktopPlayerComponent
    ]
})

export class PlayerControlModule {}

