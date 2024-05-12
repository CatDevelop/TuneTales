import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiLinkModule,
    TuiRootModule,
    TuiTextfieldControllerModule
} from '@taiga-ui/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TuiDataListWrapperModule, TuiInputModule, TuiSelectModule, TuiSliderModule} from '@taiga-ui/kit';
import {ToggleRewindComponent} from '../features/Player';
import {ButtonComponent, SelectSleepTimeComponent, SelectSpeedComponent, SliderComponent} from '../shared/ui';
import {ToglePlayComponent} from '../features/toggle-play-button';
import {ClickLeftRewindComponent, ClickRightRewindComponent} from '../features/rewind-buttons';
import {AuthorizationPage} from '../pages/authorization-page/ui/authorization.page';
import {NavbarComponent} from '../widgets/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RegisterPage} from '../pages/register-page/ui/register.page';
import {HttpService} from '../shared/global-services/request/http.service';
import {RegistrationService} from '../pages/register-page/services/registration.service';
import {AuthorizationService} from '../pages/authorization-page/services/authorization.service';
import {SessionStorageService} from '../pages/authorization-page/services/session-storage.service';
import {PlayerComponent} from '../widgets/player';
import {SleepTimerComponent, SliderRewindComponent, SpeedButtonComponent} from '../entities/player/';
import {ChaptersComponent} from '../entities/player/chapters/chapters.component';


@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
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
        ChaptersComponent,
        ClickLeftRewindComponent,
        ClickRightRewindComponent,
        AuthorizationPage,
        NavbarComponent,
        RegisterPage
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiButtonModule,
        TuiSliderModule,
        BrowserAnimationsModule,
        TuiRootModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        TuiInputModule,
        TuiTextfieldControllerModule,
        ReactiveFormsModule,
        TuiLinkModule,
        FormsModule,
        AppRoutingModule,
        TuiSelectModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiTextfieldControllerModule
    ],
    providers: [
        HttpService,
        RegistrationService,
        AuthorizationService,
        SessionStorageService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
