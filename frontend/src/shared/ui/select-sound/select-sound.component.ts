import {ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, ViewChild} from '@angular/core';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';
import { ITimeEntry } from '../../model/types';
import {ALWAYS_FALSE_HANDLER, tuiClamp} from "@taiga-ui/cdk";
import {BehaviorSubject, of, timer} from "rxjs";
import {distinctUntilChanged, map, switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-select-sound',
    templateUrl: './select-sound.component.html',
    styleUrl: './select-sound.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectSoundComponent {
    @Input()
    public width: number = 24;

    @Input()
    public height: number = 24;

    @Input()
    public soundValue: number = 0;

    @ViewChild(TuiHostedDropdownComponent)
    public component?: TuiHostedDropdownComponent;

    public open: boolean = false;

    public times: ITimeEntry[] = [
        { time: 60, name: '1 минута' },
        { time: 900, name: '15 минут' },
        { time: 1800, name: '30 минут' },
        { time: 2700, name: '45 минут' },
        { time: 3600, name: '1 час' },
        { time: 7200, name: '2 часа' },
        { time: 0, name: 'Отменить' },
    ];

    @Output()
    public valueChanged: EventEmitter<number> = new EventEmitter<number>();

    /**
     * Обрабатывает изменение значения в элементе управления формы.
     *
     * @param {number} value - Новое значение из элемента управления формы.
     * @returns {void}
     */
    public onValueChange(value: number): void {
        this.valueChanged.emit(value);
        this.open = false;
    }

    public min: number = 23;
    public max: number = 100;
    public value: number = 50;

    readonly active$ = new BehaviorSubject(false);
    readonly showHint$ = this.active$.pipe(
        distinctUntilChanged(),
        switchMap(active =>
            active ? of(true) : timer(1000).pipe(map(ALWAYS_FALSE_HANDLER)),
        ),
    );

    @HostListener('pointerdown', ['true'])
    @HostListener('document:pointerup', ['false'])
    onKeydown(show: boolean): void {
        this.active$.next(show);
    }

    public change(step: number): void {
        this.value = tuiClamp(this.value + step, this.min, this.max);
    }
}
