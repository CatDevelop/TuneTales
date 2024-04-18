import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { AuthorizationPageComponent } from '../pages/authorization/authorization.page.component';
import { TuiPreventDefaultModule } from '@taiga-ui/cdk';
import { NavbarComponent } from '../widgets/navbar/navbar.component';

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
        AppRoutingModule,
        TuiPreventDefaultModule
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
