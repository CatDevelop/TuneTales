import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-main.page',
    templateUrl: './main.page.html',
    styleUrl: './main.page.scss'
})
export class MainPage {

}

