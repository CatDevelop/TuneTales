import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationPageComponent } from '../pages/authorization-page/ui/authorization.page.component';
import { RegisterPageComponent } from '../pages/register-page/ui/register.page.component';

const routes: Routes = [
    {
        path: 'auth',
        component: AuthorizationPageComponent,
    },
    {
        path: 'register',
        component: RegisterPageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
