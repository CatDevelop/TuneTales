import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiLinkModule, TuiRootModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { AuthorizationPageComponent } from '../pages/authorization-page/ui/authorization.page.component';
import { NavbarComponent } from '../widgets/navbar/navbar.component';
import { TuiInputModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPageComponent } from '../pages/register-page/ui/register.page.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthorizationPageComponent,
        NavbarComponent,
        RegisterPageComponent
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
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
