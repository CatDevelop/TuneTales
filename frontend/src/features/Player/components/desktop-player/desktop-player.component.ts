import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IAudioChapter, IOpenFile} from "../../../../shared/model/types";

@Component({
    selector: 'app-desktop-player',
    templateUrl: './desktop-player.component.html',
    styleUrl: './desktop-player.component.scss'
})
export class DesktopPlayerComponent {
    @Input()
    public nameChapter: string = '';

    @Input()
    public nameBook: string = '';

    @Input()
    public imageUrl: string = '';

    // controls
    @Input()
    public readableCurrentTime: string = '00:00';

    @Input()
    public readableDuration: string = '00:00';

    @Input()
    public currentTime: number = 0;

    @Input()
    public duration: number = 0;

    @Input()
    public playing: boolean = false;

    @Input()
    public speedButton: number | undefined = 1;

    @Input()
    public sleepTimerButton: string | undefined = undefined;

    // chapters
    @Input()
    public chapterWindow: boolean = false;

    @Input()
    public files: IAudioChapter[] = [];

    @Input()
    public currentFile: number = 0;


    @Output()
    public eventAudioRewindBack: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    public audioRewindBack = (value: MouseEvent): void => {
        this.eventAudioRewindBack.emit(value);
    };


    @Output()
    public eventAudioRewindNext: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    public audioRewindNext = (value: MouseEvent): void => {
        this.eventAudioRewindNext.emit(value);
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
    public eventSpeed: EventEmitter<number> = new EventEmitter<number>();

    public speed = (value: number): void => {
        this.eventSpeed.emit(value);
    };


    @Output()
    public eventSleepTimer: EventEmitter<number> = new EventEmitter<number>();

    public sleepTimer = (value: number): void => {
        this.eventSleepTimer.emit(value);
    };


    @Output()
    public eventToggleChapter: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    public toggleChapter = (): void => {
        this.eventToggleChapter.emit();
    };


    @Output()
    public eventOpenFile: EventEmitter<IOpenFile> = new EventEmitter<IOpenFile>();

    public openFile = (file: IAudioChapter, index: number): void => {
        this.eventOpenFile.emit({ file, index });
    };

}
