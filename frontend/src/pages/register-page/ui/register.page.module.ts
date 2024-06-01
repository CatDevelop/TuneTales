import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterPage } from './register.page';
import { RegistrationService } from '../services/registration.service';


@NgModule({
    declarations: [
        RegisterPage,
    ],
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiInputModule,
        TuiLinkModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        RegisterPage,
    ],
    providers: [RegistrationService]
})
export class RegisterPageModule { }
