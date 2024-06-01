import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiLinkModule,
    TuiRootModule,
    TuiTextfieldControllerModule
} from '@taiga-ui/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiDataListWrapperModule, TuiInputModule, TuiSelectModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../shared/global-services/request/http.service';
import { RegistrationService } from '../pages/register-page/services/registration.service';
import { AuthorizationService } from '../pages/authorization-page/services/authorization.service';
import { SessionStorageService } from '../pages/authorization-page/services/session-storage.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CardSliderModule } from '../features/card-slider/card-slider.module';
import { MainPageModule } from '../pages/main-page/ui/main.page.module';
import { UiKitModule } from '../shared/ui/ui-kit.module';
import { PlayerModule } from '../widgets/player/player.module';
import { CardFeedModule } from '../features/card-feed/card-feed.module';
import { AuthorInfoModule } from '../widgets/author-info/author-info.module';
import { AuthorPageModule } from '../pages/author-page/ui/author.page.module';
import { AuthorService } from '../entities/Author/services/author.service';
import { NavbarModule } from '../widgets/navbar/navbar.module';
import { BookService } from '../entities/Book/services/book.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        NavbarModule,
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
        TuiLinkModule,
        FormsModule,
        NgOptimizedImage,
        CardSliderModule,
        MainPageModule,
        PlayerModule,
        UiKitModule,
        TuiButtonModule,
        CardFeedModule,
        CommonModule,
        AuthorInfoModule,
        AuthorPageModule,
        HttpClientModule,
    ],
    providers: [
        HttpService,
        RegistrationService,
        AuthorizationService,
        AuthorService,
        SessionStorageService,
        BookService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
