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

    public min: number = 0;
    public max: number = 100;

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

}
