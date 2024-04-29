import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAuthorizationForm } from '../model/authorization-form.interface';
import { AuthorizationService } from '../services/authorization.service';
import { Observable, take } from 'rxjs';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-authorization-page',
    templateUrl: './authorization.page.html',
    styleUrl: './authorization.page.scss',
})
export class AuthorizationPage {

    /**
     * isLoading для отрисовки лоадера
     */
    public get isProcessing(): Observable<boolean> {
        return this._auth.isProcessing$;
    }

    protected readonly authorizationForm: FormGroup<IAuthorizationForm> = new FormGroup({
        login: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', Validators.required),
    });

    constructor(
        private _auth: AuthorizationService,
    ) {}

    /**
     * Авторизация
     */
    public login(): void {
        this._auth.login(
            this.authorizationForm.get('login')?.value || '',
            this.authorizationForm.get('password')?.value || '',
        )
            .pipe(
                take(1),
            )
            .subscribe();
    }
}
