import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationPage } from '../pages/authorization-page/ui/authorization.page';
import { RegisterPage } from '../pages/register-page/ui/register.page';

const routes: Routes = [
    {
        path: 'auth',
        component: AuthorizationPage,
    },
    {
        path: 'register',
        component: RegisterPage,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
