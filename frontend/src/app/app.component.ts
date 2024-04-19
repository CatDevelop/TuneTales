import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    public title: string = 'TuneTales';

    public print = (event: any): void => {
        console.log(event);
    };
}
