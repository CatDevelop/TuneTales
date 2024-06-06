import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, Observable, switchMap, tap } from 'rxjs';
import { BookService } from '../../entities/Book/services/book.service';
import { IGetBookResponseDto } from '../../entities/Book/model/dto/response/get-book.response-dto';
import { HttpResponse } from '@angular/common/http';
import { AuthorizationService } from '../../pages/authorization-page/services/authorization.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnChanges {
    public searchQuery: string = '';

    public isMenuOpen: boolean = false;

    public isLogin: boolean = false;

    public readonly control: FormControl<string | null> = new FormControl('');

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

    constructor(
        private _router: Router,
        private _bookService: BookService,
        private _authService: AuthorizationService
    ) {
    }

    /**
     * Обработчик клика на меню
     */
    public onHamburgerClick(): void {
        this.isMenuOpen = true;
    }

    /**
     * Обработчик клика на кнопку назад
     */
    public onBackClick(): void {
        this.isMenuOpen = false;
    }

    /**
     * Редирект на главную страницу
     */
    public navigateToHome(): void {
        this._router.navigate([`/`]);
        this.isMenuOpen = false;
    }

    /**
     * Редирект на авторизацию
     */
    public navigateToAuthorization(): void {
        if(this.isLogin) {
            this._authService.logout();
            this.navigateToHome();
        }

        this._router.navigate([`/login`]);
        this.isMenuOpen = false;
    }

    /**
     * Редирект на книгу
     */
    public navigateToBook(id: string): void {
        this._router.navigate([`/book`, id]);
    }

    /**
     * Мои книги
     */
    public navigateMyBooks(): void {
        this._router.navigate(['/bookshelf']);
    }

    /**
     * Жанры
     */
    public navigateGenres(): void {
        this._router.navigate(['/']);
    }

    public ngOnInit(): void {
        this._authService.init();
        this._authService.isLogin$
            .pipe(
                tap(value => {
                    this.isLogin = value;
                })
            )
            .subscribe();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        this._authService.init();
    }
}
