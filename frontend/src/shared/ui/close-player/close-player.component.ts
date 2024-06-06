import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-close-player',
    templateUrl: './close-player.component.html',
    styleUrl: './close-player.component.scss'
})
export class ClosePlayerComponent {
    @Input()
    public width: number = 24;

    @Input()
    public height: number = 25;

    @Input()
    public customStyle: { [key: string]: string } = { '': '' };

    @Output()
    public eventClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    public onClickButton = (event: MouseEvent): void => {
        this.eventClick.emit(event);
    };
}
