import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ITimeEntry, ITimes } from '../../model/types';
import { tuiItemsHandlersProvider } from '@taiga-ui/kit';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';

@Component({
    selector: 'app-select-sleep-time',
    templateUrl: './select-sleep-time.component.html',
    styleUrl: './select-sleep-time.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiItemsHandlersProvider({
            stringify: (item: ITimes) => `${item.name}`,
        }),
    ],
})
export class SelectSleepTimeComponent {
    @Input()
    public width: number = 21;

    @Input()
    public height: number = 23;

    @Input()
    public color: 'black' | 'white' = 'black';

    @Input()
    public sleepTimerValue: string | undefined = undefined;

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
}
