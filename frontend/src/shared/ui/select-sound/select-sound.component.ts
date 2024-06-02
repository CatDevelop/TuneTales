import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';
import { ITimeEntry } from '../../model/types';
import { ALWAYS_FALSE_HANDLER, tuiClamp } from '@taiga-ui/cdk';
import { BehaviorSubject, Observable, of, timer } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';

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

    public min: number = 0;
    public max: number = 100;
    public value: number = 50;

    public readonly active$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public showHint$: Observable<boolean> = this.active$.pipe(
        distinctUntilChanged(),
        switchMap(active =>
            active ? of(true) : timer(1000).pipe(map(ALWAYS_FALSE_HANDLER)),
        ),
    );

    @Output()
    public valueChanged: EventEmitter<number> = new EventEmitter<number>();

    /**
     * Обрабатывает изменение значения в элементе управления формы.
     *
     * @param {number} value - Новое значение из элемента управления формы.
     * @returns {void}
     */
    public onValueChange(value: number): void {
        this.valueChanged.emit(value / 100);
    }

    /**
     * Обработка изменения
     * @param step
     */
    public change(step: number): void {
        this.value = tuiClamp(this.value + step, this.min, this.max);
    }

    /**
     * При нажатии на кнопку
     * @param show
     * @private
     */
    @HostListener('pointerdown', ['true'])
    @HostListener('document:pointerup', ['false'])
    private onKeydown(show: boolean): void {
        this.active$.next(show);
    }
}
