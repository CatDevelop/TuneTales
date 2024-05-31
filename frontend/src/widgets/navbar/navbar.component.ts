import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush, selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    public searchQuery: string = '';

    constructor(private _router: Router) {
    }

    /**
     * Редирект на главную страницу
     */
    public navigateToHome(): void {
        this._router.navigate([`/`]);
    }

    /**
     * Редирект на авторизацию
     */
    public navigateToAuthorization(): void {
        this._router.navigate([`/login`]);
    }
}
