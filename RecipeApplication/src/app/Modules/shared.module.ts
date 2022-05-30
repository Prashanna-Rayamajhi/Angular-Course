import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AlertComponent } from "../shared/alert/alert.component";
import { DropdownDirective } from "../shared/Directives/dropdown.directive";

@NgModule({
    declarations: [
        DropdownDirective,
        AlertComponent,
    ],
    imports: [
        CommonModule
    ],
    exports:[
        DropdownDirective,
        AlertComponent,
    ]
})
export class SharedModule{}