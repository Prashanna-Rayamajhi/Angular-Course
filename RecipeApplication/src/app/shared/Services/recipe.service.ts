import { Injectable } from "@angular/core";
import { Recipe } from "src/app/recipe/recipe.model";
import { Ingredient } from "../ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe("Test recipe", "The taste and qualtiy is umatched.", "http://santementalephysique.com/wp-content/uploads/2020/09/k_Photo_Recipes_2020-03-Easy-Philly-Cheesesteak-Sliders_2020-02_Easy-Philly-Cheesesteak-Sliders_318.jpg", [
          new Ingredient("Apple", 3),
          new Ingredient ("Meat", 2)
        ]),
        new Recipe("I don't know the name yet", "There is nothing better than this dish.", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/A_traditional_indian_dish_of_bengal%28pulao-mangsha_with_misti_doi%29.jpg/1280px-A_traditional_indian_dish_of_bengal%28pulao-mangsha_with_misti_doi%29.jpg", [
          new Ingredient("Bread", 5),
          new Ingredient("Cheese", 3)
        ])
      ];

    /**
     *
     */
    constructor(private slService: ShoppingListService) {}

      //this method helps in providing new refrence to recipes array rather than the reference to recipes itself
    getRecipes(){
      return this.recipes.slice();
    }

    getRecipeByID(index: number){
      return this.recipes[index -1];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

}