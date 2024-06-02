import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from '../pages/main-page/ui/main.page';
import { AuthorPage } from '../pages/author-page/ui/author.page';
import { authGuard } from '../shared/guards/auth.guard';
import { authorizationPageGuard } from '../pages/authorization-page/ui/authorization.page.guard';
import { registerPageGuard } from '../pages/register-page/ui/register.page.guard';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () =>
            import('../pages/authorization-page/ui/authorization.page.module')
                .then(m => m.AuthorizationPageModule),
        canActivate: [authorizationPageGuard],
    },
    {
        path: 'registration',
        loadChildren: () =>
            import('../pages/register-page/ui/register.page.module')
                .then(m => m.RegisterPageModule),
        canActivate: [registerPageGuard],
    },
    {
        path: 'author/:authorId',
        component: AuthorPage,
        canActivate: [authGuard]
    },
    {
        path: 'book/:bookId',
        loadChildren: () =>
            import('../pages/book-page/book.page.module')
                .then(m => m.BookPageModule),
        canActivate: [authGuard]
    },
    {
        path: 'genre/:genresId',
        loadChildren: () =>
            import('../pages/genres-page/genres-page.module')
                .then(m => m.GenresPageModule)
    },
    {
        path: 'recommendations/:recommendationsId',
        loadChildren: () =>
            import('../pages/recommendations-page/recommendations-page.module')
                .then(m => m.RecommendationsPageModule)
    },
    {
        path: 'bookshelf',
        canActivate: [authGuard],
        loadChildren: () =>
            import('../pages/bookshelf-page/bookshelf-page.module')
                .then(m => m.BookshelfPageModule)
    },
    {
        path: '',
        component: MainPage,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
