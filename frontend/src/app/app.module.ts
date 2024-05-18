import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiLinkModule, TuiRootModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiButtonModule } from '@taiga-ui/core';
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
import { NgOptimizedImage } from '@angular/common';
import { CardSliderModule } from '../features/card-slider/ui/card-slider/card-slider.module';
import { MainPageModule } from '../pages/main-page/ui/main.page.module';

@NgModule({
    declarations: [
        AppComponent,
        AuthorizationPage,
        NavbarComponent,
        RegisterPage,
    ],
    imports: [
        TuiButtonModule,
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
        NgOptimizedImage,
        CardSliderModule,
        MainPageModule,
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
