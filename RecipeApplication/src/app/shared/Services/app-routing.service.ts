///this is the service file is for routing

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipeComponent } from "src/app/recipe/recipe.component";
import { ShoppingListComponent } from "src/app/shopping-list/shopping-list.component";

const appRoutes : Routes = [
    {path: '', redirectTo : '/recipes', pathMatch : 'full'},
    {path : 'recipes', component: RecipeComponent},
    {path: 'shopping-list', component: ShoppingListComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouteModule {

}