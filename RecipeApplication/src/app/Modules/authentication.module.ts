import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthenticationComponent } from "../authentication/authentication.component";
import { LoadingSpinnerComponent } from "../shared/loading-spinner/loading.spinner";
import { SharedModule } from "./shared.module";

@NgModule({
    declarations:[
        AuthenticationComponent,
        LoadingSpinnerComponent
    ],
    exports: [
        AuthenticationComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        CommonModule,
        RouterModule.forChild([ {path: '', component: AuthenticationComponent}])
    ]
    
})
export class AuthenticationModule{}