import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouteModule } from './shared/Services/app-routing.service';

import { AppComponent } from './app.component';
import { Headers } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesListComponent } from './recipe/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipe/recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from './recipe/recipes-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

import { DropdownDirective } from './shared/Directives/dropdown.directive';
import { ShoppingListService } from './shared/Services/shopping-list.service';
import { RecipeService } from './shared/Services/recipe.service';


@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    Headers,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
