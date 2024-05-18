import { NgModule } from '@angular/core';
import { PlayerControllersModule } from '../../entities/player';
import { UiKitModule } from '../../shared/ui/ui-kit.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [

    ],
    imports: [
        PlayerControllersModule,
        UiKitModule,
        CommonModule,
        HttpClientModule,
    ],
    exports: [

    ]
})

export class PlayerControlModule {}

