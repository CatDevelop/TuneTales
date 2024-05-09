import { Component, ChangeDetectorRef , afterNextRender } from '@angular/core';
import { AudioService } from '../../features/Player';
import { CloudService } from '../../features/Player';
import { IStreamState } from '../../features/Player';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrl: './player.component.scss'
})
export class PlayerComponent  {
    public files: any = [];
    public state: IStreamState = {
        playing: false,
        readableCurrentTime: '',
        readableDuration: '',
        duration: undefined,
        currentTime: undefined,
        canplay: false,
        error: false,
    };
    public currentFile: any = {};

    constructor(private _audioService: AudioService, cloudService: CloudService, private _cdr: ChangeDetectorRef) {
        cloudService.getFiles().subscribe(files => {
            this.files = files;
        });

        this._audioService.getState()
            .subscribe(state => {
                this.state = state;
            });

        afterNextRender(() => {
            this._audioService.init();
        });
    }


    public playStream(url: string) {
        this._audioService.playStream(url)
            .subscribe(events => {
                this._cdr.detectChanges();
            });
    }

    public openFile(file: any, index: any) {
        this.currentFile = { index, file };
        this._audioService.stop();
        this.playStream(file.url);
    }

    public pause() {
        this._audioService.pause();
    }

    public play() {
        this._audioService.play();
    }

    public stop() {
        this._audioService.stop();
    }

    public next() {
        const index: any = this.currentFile.index + 1;
        const file: any = this.files[index];
        this.openFile(file, index);
    }

    public previous() {
        const index: any = this.currentFile.index - 1;
        const file: any = this.files[index];
        this.openFile(file, index);
    }

    public onSliderChangeEnd(value: any) {
        this._audioService.seekTo(value);
    }

    public audioRewindBack(value: number) {
        if (this.state.currentTime) {
            if (this.state.currentTime - value >= 0) {
                this._audioService.seekTo(this.state.currentTime - value);
            } else {
                this._audioService.seekTo(0);
            }
        }
    }

    public audioRewindNext(value: number) {
        if (this.state.currentTime && this.state.duration) {
            if (this.state.currentTime + value <= this.state.duration) {
                this._audioService.seekTo(this.state.currentTime + value);
            } else {
                this._audioService.seekTo(this.state.duration);
            }
        }
    }

    isFirstPlaying() {
        return this.currentFile.index === 0;
    }

    isLastPlaying() {
        return this.currentFile.index === this.files.length - 1;
    }


}
