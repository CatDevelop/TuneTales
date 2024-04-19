import { Component } from '@angular/core';

@Component({
    selector: 'app-back-button',
    templateUrl: './back-button.component.html',
    styleUrl: './back-button.component.scss'
})
export class BackButtonComponent {
    constructor() {
        console.log('BackButtonComponent constructor');
    }
}
