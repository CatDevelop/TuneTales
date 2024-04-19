import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiLinkModule, TuiRootModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { AuthorizationPageComponent } from '../pages/authorization/authorization.page.component';
import { NavbarComponent } from '../widgets/navbar/navbar.component';
import { TuiInputModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        AuthorizationPageComponent,
        NavbarComponent
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
        TuiLinkModule
    ],
    providers: [
        provideClientHydration(),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
