import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IBook } from '../../../../entities/Book/model/book.interface';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-card-slider',
    templateUrl: './card-slider.component.html',
    styleUrl: './card-slider.component.scss'
})
export class CardSliderComponent {
    @ViewChild('scrl') public scrl: ElementRef | undefined;
    @Input()
    public books: IBook[] | null = [];
    @Input()
    public label: string | undefined = undefined;

    public defaultShift: number = 300;
    public scrollX: number = 0;
    public scrollEnd: boolean = false;

    /**
     * slide
     * @param shift
     */
    public slide(shift: number): void {
        if (this.scrl) {
            this.scrl.nativeElement.scrollBy({
                left: shift,
                behavior: 'smooth',
            });
            this.scrollX += shift;
            this.scrollCheck();
        }
    }

    /**
     * check
     */
    public scrollCheck(): void {
        if (this.scrl) {
            this.scrollX = this.scrl.nativeElement.scrollLeft;
            this.scrollEnd = Math.floor(this.scrl.nativeElement.scrollWidth - this.scrl.nativeElement.scrollLeft) <= this.scrl.nativeElement.offsetWidth;
        }
    }
}
