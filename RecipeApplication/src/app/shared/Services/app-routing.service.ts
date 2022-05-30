///this is the service file is for routing
//tbh this is not a service file rather it is a route module

import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";


const appRoutes : Routes = [
    {path: '', redirectTo : '/recipes', pathMatch : 'full'},
    {path: 'recipes', loadChildren: ()=>{return import('./../../Modules/recipe.module').then(m => m.RecipeModule);}},
    {path: 'authentication', loadChildren: ()=>{return import('./../../Modules/authentication.module').then(m => m.AuthenticationModule);}}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRouteModule {

}