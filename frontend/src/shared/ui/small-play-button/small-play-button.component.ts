import {Component, EventEmitter, Input, numberAttribute, Output} from '@angular/core';

@Component({
    selector: 'app-small-play-button',
    templateUrl: './small-play-button.component.html',
    styleUrl: './small-play-button.component.scss'
})
export class SmallPlayButtonComponent {
    public activeButton: boolean = false;

    @Input()
    public width: number = 24;

    @Input()
    public height: number = 25;

    @Input()
    public customStyle: { [key: string]: string } = { '': '' };

    @Output()
    public eventClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    public onClickButton = (event: MouseEvent): void => {
        this.activeButton = !this.activeButton;
        this.eventClick.emit(event);
    };
}
