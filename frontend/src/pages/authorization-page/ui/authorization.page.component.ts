import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAuthorizationForm } from '../model/iAuthorizationForm';
import { AuthorizationService } from '../services/authorization.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-authorization-page',
    templateUrl: './authorization.page.component.html',
    styleUrl: './authorization.page.component.scss',
})
export class AuthorizationPageComponent {

    /**
     * isLoading для отрисовки лоадера
     */
    public get isProcessing(): boolean {
        return this._auth.isProcessing;
    }

    public readonly authorizationForm: FormGroup<IAuthorizationForm> = new FormGroup({
        login: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', Validators.required),
    });

    constructor(private _auth: AuthorizationService) {
    }

    /**
     * Авторизация
     */
    public login(): void {
        this._auth.login(
            this.authorizationForm.get('login')?.value || '',
            this.authorizationForm.get('password')?.value || '',
        ).subscribe();
    }
}
