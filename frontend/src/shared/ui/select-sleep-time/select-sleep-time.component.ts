import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { ITimeEntry } from '../../model/types';
import { FormControl } from '@angular/forms';
import { tuiItemsHandlersProvider } from '@taiga-ui/kit';
import { ITimes } from '../../model/types';

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

    public testValue: FormControl<string | null> = new FormControl();

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
     * @param {any} value - Новое значение из элемента управления формы.
     * @returns {void}
     */
    public onValueChange(value: any): void {
        this.valueChanged.emit(value);
    }
}
