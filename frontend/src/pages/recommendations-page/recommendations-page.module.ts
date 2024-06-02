import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationsPageComponent } from './recommendations-page.component';
import { RecommendationsPageRoutingModule } from './recommendations-page-routing.module';
import { CardFeedModule } from '../../features/card-feed/card-feed.module';
import {MainPageService} from "../main-page/model/services/main.page.service";

@NgModule({
    declarations: [
        RecommendationsPageComponent
    ],
    imports: [
        CommonModule,
        RecommendationsPageRoutingModule,
        CardFeedModule
    ],
    exports: [
        RecommendationsPageComponent,
    ],
    providers: [
        MainPageService
    ]
})
export class RecommendationsPageModule { }
