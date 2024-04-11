import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-backend';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        AppModule,
        ServerModule,
    ],
    bootstrap: [AppComponent],
})
export class AppServerModule {}
