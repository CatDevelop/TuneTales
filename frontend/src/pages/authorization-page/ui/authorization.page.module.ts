import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiButtonModule, TuiLinkModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { AuthorizationPage } from './authorization.page';
import { AuthorizationService } from '../services/authorization.service';
import { AuthorizationPageRoutingModule } from './authorization.page-routing.module';
import { TuiInputModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AuthorizationPage,
    ],
    imports: [
        CommonModule,
        TuiButtonModule,
        AuthorizationPageRoutingModule,
        TuiInputModule,
        TuiLinkModule,
        FormsModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
    ],
    exports: [
        AuthorizationPage,
    ],
    providers: [AuthorizationService]
})
export class AuthorizationPageModule { }
