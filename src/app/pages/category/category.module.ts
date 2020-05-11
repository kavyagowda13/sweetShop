import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {categoryRoutes} from "./category.routes";
import {SharedModule} from "../../shared/shared.module";
import {CategoryComponent} from "./category.component";
import { ProductcardsComponent } from './productcards/productcards.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(categoryRoutes)
    ],
    declarations: [
        CategoryComponent,
        ProductcardsComponent
    ]
})
export class CategoryModule { }
