import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiButtonModule, TuiDataListModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiSliderModule, TuiDataListWrapperModule, TuiSelectModule } from '@taiga-ui/kit';
import { ToglePlayComponent } from '../features/Player';
import { ToggleRewindComponent } from '../features/Player';
import { ButtonComponent } from '../shared/ui';
import { SliderComponent } from '../shared/ui';
import { PlayerComponent } from '../widgets/player';
import { SliderRewindComponent } from '../entities/player/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectSpeedComponent } from '../shared/ui';
import { SelectSleepTimeComponent } from '../shared/ui';
import { SleepTimerComponent } from '../entities/player/';
import { SpeedButtonComponent } from '../entities/player/';


@NgModule({
    declarations: [
        AppComponent,
        SliderComponent,
        ToglePlayComponent,
        ToggleRewindComponent,
        ButtonComponent,
        PlayerComponent,
        SliderRewindComponent,
        SelectSpeedComponent,
        SelectSleepTimeComponent,
        SleepTimerComponent,
        SpeedButtonComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiButtonModule,
        TuiSliderModule,
        BrowserAnimationsModule,
        TuiRootModule,
        BrowserModule,
        AppRoutingModule,
        TuiSelectModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiTextfieldControllerModule
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
