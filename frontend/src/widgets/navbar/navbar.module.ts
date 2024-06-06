import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { UiKitModule } from '../../shared/ui/ui-kit.module';
import { TuiInputModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiDataListModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { BookService } from '../../entities/Book/services/book.service';
import { TuiLetModule } from '@taiga-ui/cdk';
import { InlineSvgDirective } from '../../shared/directive/inline-svg.directive';

@NgModule({
    imports: [
        CommonModule,
        UiKitModule,
        ReactiveFormsModule,
        TuiInputModule,
        TuiDataListModule,
        TuiTextfieldControllerModule,
        FormsModule,
        TuiLetModule,
        InlineSvgDirective
    ],
    declarations: [
        NavbarComponent,
    ],
    exports: [
        NavbarComponent
    ],
    providers: [
        BookService
    ]
})

export class NavbarModule {
}
