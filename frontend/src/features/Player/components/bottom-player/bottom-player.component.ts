import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-bottom-player',
    templateUrl: './bottom-player.component.html',
    styleUrl: './bottom-player.component.scss'
})
export class BottomPlayerComponent {
    @Input()
    public playerWindow: 'full' | 'bottom' | 'none' = 'bottom';

    @Input()
    public currentTime: number = 0;

    @Input()
    public duration: number = 0;

    @Input()
    public imageUrl: string = '';

    @Input()
    public nameChapter: string = '';

    @Input()
    public nameBook: string = '';

    @Input()
    public playing: boolean = false;


    @Output()
    public eventPlayerWindow: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    public togglePlayerWindow = (): void => {
        this.eventPlayerWindow.emit();
    };


    @Output()
    public eventPause: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    public pause = (): void => {
        this.eventPause.emit();
    };


    @Output()
    public eventPlay: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    public play = (): void => {
        this.eventPlay.emit();
    };


    @Output()
    public eventStop: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    public stop = (): void => {
        this.eventStop.emit();
    };
}
