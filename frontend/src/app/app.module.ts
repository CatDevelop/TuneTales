import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiLinkModule,
    TuiRootModule,
    TuiTextfieldControllerModule
} from '@taiga-ui/core';
import { AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TuiDataListWrapperModule, TuiInputModule, TuiSelectModule, TuiSliderModule} from '@taiga-ui/kit';
import {AuthorizationPage} from '../pages/authorization-page/ui/authorization.page';
import {NavbarComponent} from '../widgets/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPage } from '../pages/register-page/ui/register.page';
import { HttpService } from '../shared/global-services/request/http.service';
import { RegistrationService } from '../pages/register-page/services/registration.service';
import { AuthorizationService } from '../pages/authorization-page/services/authorization.service';
import { SessionStorageService } from '../pages/authorization-page/services/session-storage.service';
import { NgOptimizedImage } from '@angular/common';
import { CardSliderModule } from '../features/card-slider/card-slider.module';
import { MainPageModule } from '../pages/main-page/ui/main.page.module';

import { UiKitModule } from '../shared/ui/ui-kit.module';
import { PlayerModule } from '../widgets/player/player.module';

@NgModule({
    declarations: [
        AppComponent,
        AuthorizationPage,
        NavbarComponent,
        RegisterPage,
    ],
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        TuiSelectModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        BrowserModule,
        TuiTextfieldControllerModule,
        TuiRootModule,
        HttpClientModule,
        AppRoutingModule,
        TuiInputModule,
        TuiTextfieldControllerModule,
        ReactiveFormsModule,
        TuiLinkModule,
        FormsModule,
        NgOptimizedImage,
        CardSliderModule,
        MainPageModule,
        PlayerModule,
        UiKitModule,
        TuiButtonModule
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
