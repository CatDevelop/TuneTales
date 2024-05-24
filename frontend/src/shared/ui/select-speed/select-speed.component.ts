import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { ISpeedEntry } from '../../model/types';
import { FormControl } from '@angular/forms';
import { tuiItemsHandlersProvider } from '@taiga-ui/kit';
import { ISpeed } from '../../model/types';

@Component({
    selector: 'app-select-speed',
    templateUrl: './select-speed.component.html',
    styleUrl: './select-speed.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiItemsHandlersProvider({
            stringify: (item: ISpeed) => `${item.name}`,
        }),
    ],
})
export class SelectSpeedComponent {
    @Input()
    public width: number = 21;

    @Input()
    public height: number = 23;

    @Input()
    public color: 'black' | 'white' = 'black';

    @Input()
    public speedTimerValue: number | undefined = undefined;

    public testValue: FormControl<number | null> = new FormControl();

    public speeds: ISpeedEntry[] = [
        { speed: 0.75, name: '0.75x' },
        { speed: 1, name: '1x' },
        { speed: 1.25, name: '1.25x' },
        { speed: 1.5, name: '1.5x' },
        { speed: 1.75, name: '1.75x' },
        { speed: 2, name: '2x' },
        { speed: 2.25, name: '2.25x' },
        { speed: 2.5, name: '2.5x' }
    ];

    @Output()
    public valueChanged: EventEmitter<number> = new EventEmitter<number>();

    /**
     * Обрабатывает изменение значения в элементе управления формы.
     *
     * @param {any} value - Новое значение из элемента управления формы.
     * @returns {void}
     */
    public onValueChange(value: number): void {
        this.valueChanged.emit(value);
    }
}

