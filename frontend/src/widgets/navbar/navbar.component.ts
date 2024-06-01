import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, Observable, switchMap, tap } from 'rxjs';
import { BookService } from '../../entities/Book/services/book.service';
import { IGetBookResponseDto } from '../../entities/Book/model/dto/response/get-book.response-dto';
import { HttpResponse } from '@angular/common/http';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    public searchQuery: string = '';

    public readonly control: FormControl<string | null> = new FormControl('');

    constructor(private _router: Router,
                private _bookService: BookService) {
    }

    public readonly books$: Observable<IGetBookResponseDto[]> = this.control.valueChanges.pipe(
        tap(() => console.log(this._bookService)),
        switchMap(value =>
            this._bookService.getBookBySearch(value ?? '').pipe(
                map((response: HttpResponse<IGetBookResponseDto[]>) => {
                    if (response.ok && response.body) {
                        return response.body;
                    }

                    return [];
                }),
            ),
        )
    );

    /**
     * Редирект на главную страницу
     */
    public navigateToHome(): void {
        this._router.navigate([`/`]);
    }

    /**
     * Редирект на авторизацию
     */
    public navigateToAuthorization(): void {
        this._router.navigate([`/login`]);
    }
}
