import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendationsPageComponent } from './recommendations-page.component';
import { authGuard } from '../../shared/guards/auth.guard';

const routes: Routes = [{
    path: '',
    component: RecommendationsPageComponent,
    canActivate: [authGuard]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecommendationsPageRoutingModule { }
