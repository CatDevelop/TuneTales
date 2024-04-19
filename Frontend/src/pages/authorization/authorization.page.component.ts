import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,selector: 'app-authorization',
    templateUrl: './authorization.page.component.html',
    styleUrl: './authorization.page.component.scss'
})
export class AuthorizationPageComponent {

}
