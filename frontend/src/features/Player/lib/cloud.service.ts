import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PlayerControlModule } from '../player-control.module';
import { IAudioChapter } from '../model/types';

@Injectable({
    providedIn: PlayerControlModule
})
export class CloudService {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private chapters: IAudioChapter[] = [
        {
            id: '6dc9ca64-6930-4a4b-9ecf-a8a211742605',
            name: 'Глава 1',
            durationSeconds: 100,
            audioSrc: './assets/01.mp3'
        },
        {
            id: '1d0e6899-3d9b-41fd-9108-f84b33b4df13',
            name: 'Глава 2',
            durationSeconds: 100,
            audioSrc: './assets/02.mp3'
        },
        {
            id: '454924ed-7c7f-449d-b19f-3394fd4636e3',
            name: 'Глава 3',
            durationSeconds: 100,
            audioSrc: './assets/03.mp3'
        }
    ];

    // eslint-disable-next-line jsdoc/require-jsdoc
    public getFiles(): Observable<any[]> {
        return of(this.chapters);
    }
}
