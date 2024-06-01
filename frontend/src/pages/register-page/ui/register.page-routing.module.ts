import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPage } from './register.page';
import { registerPageGuard } from './register.page.guard';

const routes: Routes = [{
    path: '',
    component: RegisterPage,
    canActivate: [registerPageGuard]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterPageRoutingModule { }

