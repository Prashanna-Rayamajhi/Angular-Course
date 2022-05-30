import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoppingEditComponent } from "../shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "../shopping-list/shopping-list.component";
import { SharedModule } from "./shared.module";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        FormsModule,
        SharedModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([{
            path: 'shopping-list', component: ShoppingListComponent,
        }])
    ]
})
export class ShoppingModule{

}