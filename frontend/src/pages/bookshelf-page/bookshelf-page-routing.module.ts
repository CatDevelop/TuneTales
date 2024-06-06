import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookshelfPageComponent } from './bookshelf-page.component';
import { authGuard } from '../../shared/guards/auth.guard';

const routes: Routes = [{
    path: '',
    component: BookshelfPageComponent,
    canActivate: [authGuard]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookshelfPageRoutingModule { }
