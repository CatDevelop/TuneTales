import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiLinkModule, TuiRootModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiSliderModule } from '@taiga-ui/kit';
import { ButtonComponent } from '../shared/ui';
import { SliderComponent } from '../entities/player-slider/ui';
import { ToglePlayComponent } from '../features/toggle-play-button';
import { ClickLeftRewindComponent, ClickRightRewindComponent } from '../features/rewind-buttons';
import { AuthorizationPage } from '../pages/authorization-page/ui/authorization.page';
import { NavbarComponent } from '../widgets/navbar/navbar.component';
import { TuiInputModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPage } from '../pages/register-page/ui/register.page';
import { HttpService } from '../shared/global-services/request/http.service';
import { RegistrationService } from '../pages/register-page/services/registration.service';
import { AuthorizationService } from '../pages/authorization-page/services/authorization.service';
import { SessionStorageService } from '../pages/authorization-page/services/session-storage.service';

@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        SliderComponent,
        ToglePlayComponent,
        ClickLeftRewindComponent,
        ClickRightRewindComponent,
        AuthorizationPage,
        NavbarComponent,
        RegisterPage
    ],
    imports: [
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
        FormsModule
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
