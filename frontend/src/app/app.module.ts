import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiSliderModule } from '@taiga-ui/kit';
import { ToglePlayComponent } from '../features/Player';
import { ToggleRewindComponent } from '../features/Player';
import { ButtonComponent } from '../shared/ui';
import { SliderComponent } from '../shared/ui';
import { PlayerComponent } from '../widgets/player';
import { SliderRewindComponent } from '../entities/player/slider-rewind/slider-rewind.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        AppComponent,
        SliderComponent,
        ToglePlayComponent,
        ToggleRewindComponent,
        ButtonComponent,
        PlayerComponent,
        SliderRewindComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
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
