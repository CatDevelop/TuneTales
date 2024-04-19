import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAuthorizationForm } from './model/iAuthorizationForm';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-authorization',
    templateUrl: './authorization.page.component.html',
    styleUrl: './authorization.page.component.scss'
})
export class AuthorizationPageComponent {
    public readonly authorizationForm: FormGroup<IAuthorizationForm> = new FormGroup({
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', Validators.required),
    });
}
