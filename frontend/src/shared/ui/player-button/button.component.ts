import {Component, EventEmitter, Input, numberAttribute, Output} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss'
})
export class ButtonComponent {
    @Input({transform: numberAttribute})
        width: number = 30;
    @Input({transform: numberAttribute})
        height: number = 30;
    @Input()
        imageUrl: string = '';
    @Input()
        imageAlt: string = '';

    @Output()
        eventClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    public onClickButton = (event: MouseEvent): void => {
        this.eventClick.emit(event);
    };
}
