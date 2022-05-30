import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RecipeComponent } from "../recipe/recipe.component";
import { RecipesDetailComponent } from "../recipe/recipes-detail/recipes-detail.component";
import { RecipeItemComponent } from "../recipe/recipes-list/recipe-item/recipe-item.component";
import { RecipesListComponent } from "../recipe/recipes-list/recipes-list.component";
import { RecipeRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "./shared.module";

@NgModule({
    declarations: [
        RecipeComponent,
        RecipesListComponent,
        RecipesDetailComponent,
        RecipeItemComponent,
        RecipesDetailComponent,
        RecipeItemComponent,
    ],
    imports: [
        CommonModule, 
        ReactiveFormsModule, 
        FormsModule, 
        RecipeRoutingModule,
        SharedModule
    ],
    
    
})
export class RecipeModule{}