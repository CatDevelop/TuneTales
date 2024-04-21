import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiSliderModule } from '@taiga-ui/kit';
import { ButtonComponent } from '../shared/ui';
import { SliderComponent } from '../entities/player-slider/ui';
import { ToglePlayComponent } from '../features/toggle-play-button';
import { ClickLeftRewindComponent, ClickRightRewindComponent } from '../features/rewind-buttons';

@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        SliderComponent,
        ToglePlayComponent,
        ClickLeftRewindComponent,
        ClickRightRewindComponent
    ],
    imports: [
        TuiButtonModule,
        TuiSliderModule,
        BrowserAnimationsModule,
        TuiRootModule,
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
