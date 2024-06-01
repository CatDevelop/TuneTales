import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from '../pages/main-page/ui/main.page';
import { AuthorPage } from '../pages/author-page/ui/author.page';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () =>
            import('../pages/authorization-page/ui/authorization.page.module')
                .then(m => m.AuthorizationPageModule)
    },
    {
        path: 'registration',
        loadChildren: () =>
            import('../pages/register-page/ui/register.page.module')
                .then(m => m.RegisterPageModule)
    },
    {
        path: 'author/:authorId',
        component: AuthorPage,
    },
    {
        path: 'book/:bookId',
        loadChildren: () =>
            import('../pages/book-page/book.page.module')
                .then(m => m.BookPageModule)
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
