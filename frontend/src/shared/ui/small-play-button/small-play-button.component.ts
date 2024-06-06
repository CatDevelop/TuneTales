import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-small-play-button',
    templateUrl: './small-play-button.component.html',
    styleUrl: './small-play-button.component.scss'
})
export class SmallPlayButtonComponent {
    @Input()
    public activeButton: boolean = false;

    @Input()
    public width: number = 19;

    @Input()
    public height: number = 21;

    @Input()
    public customStyle: { [key: string]: string } = { '': '' };

    @Output()
    public eventClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    public onClickButton = (event: MouseEvent): void => {
        this.activeButton = !this.activeButton;
        this.eventClick.emit(event);
    };
}
