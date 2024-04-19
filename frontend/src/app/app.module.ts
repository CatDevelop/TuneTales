import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        TuiButtonModule,
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
