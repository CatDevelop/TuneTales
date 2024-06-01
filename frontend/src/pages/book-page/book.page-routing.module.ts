import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPage } from './book.page';
import { authGuard } from '../../shared/guards/auth.guard';

const routes: Routes = [{
    path: '',
    component: BookPage,
    canActivate: [authGuard]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookPageRoutingModule { }
