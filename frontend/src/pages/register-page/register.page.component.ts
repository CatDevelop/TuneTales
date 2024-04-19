import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IRegisterForm } from './model/iRegisterForm';

@Component({
    selector: 'app-register-page',
    templateUrl: './register.page.component.html',
    styleUrl: './register.page.component.scss'
})
export class RegisterPageComponent {
    public readonly registrationForm: FormGroup<IRegisterForm> = new FormGroup({
        login: new FormControl<string>(
            '',
            [Validators.required, Validators.min(3)]
        ) || '',
        email: new FormControl<string>(
            '',
            [Validators.required, Validators.email]
        ) || '',
        password: new FormControl<string>(
            '',
            [Validators.required]
        ) || '',
        firstName: new FormControl<string>(
            '',
            [Validators.required]
        ) || '',
        secondName: new FormControl<string>(
            '',
            [Validators.required]
        ) || '',
        lastName: new FormControl<string>(
            '',
            [Validators.required]
        ) || '',
    });

    /**
     * Регистрация пользователя в системе
     */
    public register() {

    }
}

