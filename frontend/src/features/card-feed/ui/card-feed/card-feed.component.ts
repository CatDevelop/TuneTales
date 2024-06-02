import {
    AfterViewInit,
    ChangeDetectionStrategy, ChangeDetectorRef,
    Component,
    ElementRef,
    HostListener,
    Input,
    OnInit,
    ViewChild
} from '@angular/core';
import { IBook } from '../../../../entities/Book/model/book.interface';

@Component({
    selector: 'app-card-feed',
    templateUrl: './card-feed.component.html',
    styleUrls: ['./card-feed.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFeedComponent implements AfterViewInit  {
    @ViewChild('cardfeed', { static: true })
    public cardFeedContainer!: ElementRef;

    private _books: IBook[] = [];

    @Input() set books(value: IBook[]) {
        this._books = value;
        this.updateColumns();
    }
    public get books(): IBook[] {
        return this._books;
    }

    public columns: IBook[][] = [];
    public columnCount: number = 1;

    constructor(private _cdr: ChangeDetectorRef) {}

    // /**
    //  * Жизненный цикл компонента, вызываемый после инициализации свойств с привязкой данных.
    //  * Инициализирует колонки на основе текущей ширины контейнера.
    //  */
    public ngAfterViewInit(): void {
        this.updateColumns();
        this._cdr.detectChanges(); // Запускает обнаружение изменений после обновления колонок
    }

    /**
     * Декоратор HostListener для событий изменения размера окна.
     * Обновляет колонки при изменении размера окна.
     * @param event Событие изменения размера
     */
    @HostListener('window:resize', ['$event'])
    onResize(): void {
        this.updateColumns();
    }

    /**
     * Обновляет колонки на основе текущей ширины контейнера.
     */
    public updateColumns(): void {
        const width: number = this.cardFeedContainer.nativeElement.offsetWidth;
        this.columnCount = this.getColumnCount(width);
        this.columns = this.distributeBooks(this.books, this.columnCount);
    }

    /**
     * Определяет количество колонок на основе ширины контейнера.
     * @param width Ширина контейнера
     * @returns Количество колонок
     */
    public getColumnCount(width: number): number {
        if (width >= 1275) {
            return 6;
        }
        if (width >= 1060) {
            return 5;
        }
        if (width >= 845) {
            return 4;
        }
        if (width >= 630) {
            return 3;
        }
        if (width >= 200) {
            return 2;
        }

        return 1;
    }

    /**
     * Распределяет книги равномерно по указанному количеству колонок.
     * @param books Массив книг для распределения
     * @param columnCount Количество колонок
     * @returns Двумерный массив, где каждый подмассив представляет собой колонку книг
     */
    public distributeBooks(books: IBook[], columnCount: number): IBook[][] {
        const columns: IBook[][] = Array.from({ length: columnCount }, () => []);
        books.forEach((book, index) => {
            columns[index % columnCount].push(book);
        });

        return columns;
    }
}
