import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-chapters',
    templateUrl: './chapters.component.html',
    styleUrl: './chapters.component.scss'
})
export class ChaptersComponent {
    @Input()
    public files: any;

    @Input()
    public currentIndexFile: number = 0;

    @Output()
    public valueChanged = new EventEmitter<{ file: any, index: number }>();

    @Output()
    public stateChapterChanged = new EventEmitter();

    /**
     * Обработчик события изменения значения элемента.
     * @param {Event} event - Событие изменения значения элемента.
     * @emits {string} valueChanged - Генерируется при изменении значения элемента.
     * @returns {void}
     */
    public onChange(file: any, index: number): void {
        this.valueChanged.emit({ file, index });
    }

    public toggleChapter(): void {
        this.stateChapterChanged.emit();
    }
}
