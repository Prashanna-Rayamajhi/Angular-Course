import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { RecipeService } from "./recipe.service";
import { Recipe } from "src/app/recipe/recipe.model";
import { map, tap } from "rxjs";

@Injectable({providedIn: 'root'})
export class DataStorageService{
  //constructor for data storage class
  private static apiURI: string = 'https://ng-recipeapplication-default-rtdb.firebaseio.com/recipes.json';
  constructor(private http: HttpClient, private recipeService: RecipeService){}

  SaveRecipe(){
    const recipes: Recipe[] = this.recipeService.getRecipes();
    this.http.put(DataStorageService.apiURI, recipes)
    .subscribe(response => console.log(response));
  }

  FetchRecipes(){
    return  this.http.get<Recipe[]>(DataStorageService.apiURI)
      .pipe(
          map(recipes => {
              return recipes.map(recipe => {
                  return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
              })
          }),
          tap<Recipe[]>({
            next: recipes => this.recipeService.StoreRecipes(recipes)
            })
      )
  }

}