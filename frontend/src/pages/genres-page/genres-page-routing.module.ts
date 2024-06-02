import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresPageComponent } from './genres-page.component';
import { authGuard } from '../../shared/guards/auth.guard';

const routes: Routes = [{
    path: '',
    component: GenresPageComponent,
    canActivate: [authGuard]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GenresPageRoutingModule { }
