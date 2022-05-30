import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeEditComponent } from "../recipe/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "../recipe/recipe-start/recipe-start.component";
import { RecipeComponent } from "../recipe/recipe.component";
import { RecipesDetailComponent } from "../recipe/recipes-detail/recipes-detail.component";
import { AuthGaurd } from "../shared/Services/auth.gaurd";
import { RecipeResolverService } from "../shared/Services/recipe-resolver.service";

//maybe error is due to unfollowed ocre module portion WATCH THE CORE MODULE AND REBUILT LAZY LOADING PORTION!!!!
const routes: Routes = [
    {path : '', component: RecipeComponent, canActivate: [AuthGaurd], 
        children: [
        {path: '', component: RecipeStartComponent},
        {path: 'Add', component: RecipeEditComponent},
        {path: 'Edit/:id', component: RecipeEditComponent, resolve: [RecipeResolverService]},
        {path: ':id', component: RecipesDetailComponent, resolve: [RecipeResolverService]}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipeRoutingModule{

}