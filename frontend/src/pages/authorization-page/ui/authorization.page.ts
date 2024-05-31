import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAuthorizationForm } from '../model/authorization-form.interface';
import { AuthorizationService } from '../services/authorization.service';
import { Observable, take } from 'rxjs';
import { Router } from '@angular/router';

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
        private _router: Router,
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
            .subscribe(resp => {
                if (resp.ok) {
                    this.navigateToMainPage();
                }
            });
    }

    /**
     * Редирект на страницу регистрации
     * @protected
     */
    protected navigateToRegistration(): void {
        this._router.navigate(['/registration']);
    }

    /**
     * Редирект на главную
     * @private
     */
    private navigateToMainPage(): void {
        this._router.navigate(['/']);
    }
}
