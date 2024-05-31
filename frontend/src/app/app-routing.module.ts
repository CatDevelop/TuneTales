import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationPage } from '../pages/authorization-page/ui/authorization.page';
import { RegisterPage } from '../pages/register-page/ui/register.page';
import { MainPage } from '../pages/main-page/ui/main.page';
import { AuthorPage } from '../pages/author-page/ui/author.page';

const routes: Routes = [
    {
        path: 'login',
        component: AuthorizationPage,
    },
    {
        path: 'registration',
        component: RegisterPage,
    },
    {
        path: 'author/:authorId',
        component: AuthorPage,
    },
    {
        path: 'book/:bookId',
        loadChildren: () =>
            import('../pages/book.page/book.page.module')
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
