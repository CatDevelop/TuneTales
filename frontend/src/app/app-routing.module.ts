import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationPage } from '../pages/authorization-page/ui/authorization.page';
import { RegisterPage } from '../pages/register-page/ui/register.page';
import { MainPage } from '../pages/main-page/ui/main.page';

const routes: Routes = [
    {
        path: 'auth',
        component: AuthorizationPage,
    },
    {
        path: 'register',
        component: RegisterPage,
    },
    {
        path: '',
        component: MainPage,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
