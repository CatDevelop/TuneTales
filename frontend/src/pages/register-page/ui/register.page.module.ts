import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiButtonModule, TuiLinkModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterPage } from './register.page';
import { RegistrationService } from '../services/registration.service';
import { RegisterPageRoutingModule } from './register.page-routing.module';


@NgModule({
    declarations: [
        RegisterPage,
    ],
    imports: [
        CommonModule,
        RegisterPageRoutingModule,
        TuiButtonModule,
        TuiInputModule,
        TuiLinkModule,
        FormsModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
    ],
    exports: [
        RegisterPage,
    ],
    providers: [RegistrationService]
})
export class RegisterPageModule { }
