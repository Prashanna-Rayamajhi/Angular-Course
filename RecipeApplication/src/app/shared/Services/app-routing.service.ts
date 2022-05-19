///this is the service file is for routing

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeEditComponent } from "src/app/recipe/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "src/app/recipe/recipe-start/recipe-start.component";

import { RecipeComponent } from "src/app/recipe/recipe.component";
import { RecipesDetailComponent } from "src/app/recipe/recipes-detail/recipes-detail.component";
import { ShoppingListComponent } from "src/app/shopping-list/shopping-list.component";

const appRoutes : Routes = [
    {path: '', redirectTo : '/recipes', pathMatch : 'full'},
    {path : 'recipes', component: RecipeComponent, children: [
        {path: '', component: RecipeStartComponent},
        {path: 'Add', component: RecipeEditComponent},
        {path: 'Edit/:id', component: RecipeEditComponent},
        {path: ':id', component: RecipesDetailComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouteModule {

}