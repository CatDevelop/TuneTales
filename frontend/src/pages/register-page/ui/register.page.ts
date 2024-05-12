import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IRegisterForm } from '../model/register-form.interface';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,selector: 'app-register-page',
    templateUrl: './register.page.html',
    styleUrl: './register.page.scss'
})
export class RegisterPage {
    protected readonly registrationForm: FormGroup<IRegisterForm> = new FormGroup({
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

    constructor(
        private _register: RegistrationService,
        private _router: Router,
    ) {}

    /**
     * Регистрация пользователя в системе
     */
    public register(): void {
        this._register.register({
            email: this.registrationForm.get('email')?.value || '',
            login: this.registrationForm.get('login')?.value || '',
            password: this.registrationForm.get('password')?.value || '',
            firstName: this.registrationForm.get('firstName')?.value || '',
            secondName: this.registrationForm.get('secondName')?.value || '',
            lastName: this.registrationForm.get('lastName')?.value || '',
        });
    }

    /**
     * Редирект на страницу авторизации
     * @protected
     */
    protected navigateToAuthorization(): void {
        this._router.navigate(['/auth']);
    }
}

