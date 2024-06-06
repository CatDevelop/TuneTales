import { Component, EventEmitter, Input, numberAttribute, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss'
})
export class ButtonComponent {
    @Input({ transform: numberAttribute })
    public width: number = 30;
    @Input({ transform: numberAttribute })
    public height: number = 30;
    @Input()
    public imageUrl: string = '';
    @Input()
    public imageAlt: string = '';
    @Input()
    public customStyle: { [key: string]: string } = { '': '' };

    @Output()
    public eventClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    public onClickButton = (event: MouseEvent): void => {
        this.eventClick.emit(event);
    };
}
