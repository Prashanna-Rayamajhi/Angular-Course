import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { RecipeService } from "./recipe.service";
import { Recipe } from "src/app/recipe/recipe.model";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthenticationService } from "./authentication.service";
import { User } from "../user.model";

@Injectable({providedIn: 'root'})
export class DataStorageService{
  //constructor for data storage class
  private static apiURI: string = 'https://ng-recipeapplication-default-rtdb.firebaseio.com/recipes.json';
  constructor(private http: HttpClient, private recipeService: RecipeService, private authservice: AuthenticationService){}

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