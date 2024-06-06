import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IGetAuthorByIdResponseDto } from '../../entities/Author/model/dto/response/get-author-by-id.response-dto';

@Component({
    selector: 'author-info',
    templateUrl: './author-info.component.html',
    styleUrl: './author-info.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorInfoComponent {
    @Input({ required: true })
    public author: IGetAuthorByIdResponseDto = {} as IGetAuthorByIdResponseDto;
}
