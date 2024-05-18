import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBookResponse } from '../../../../pages/main-page/model/types/dto/get-books.response-dto';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-card-slider',
    templateUrl: './card-slider.component.html',
    styleUrl: './card-slider.component.scss'
})
export class CardSliderComponent {
    @Input()
    public books: IBookResponse[] = [];
}
