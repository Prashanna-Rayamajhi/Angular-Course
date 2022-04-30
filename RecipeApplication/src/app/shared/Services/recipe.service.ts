import { EventEmitter } from "@angular/core";
import { Recipe } from "src/app/recipe/recipe.model";

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe("Test recipe", "This is a test recipe", "http://santementalephysique.com/wp-content/uploads/2020/09/k_Photo_Recipes_2020-03-Easy-Philly-Cheesesteak-Sliders_2020-02_Easy-Philly-Cheesesteak-Sliders_318.jpg"),
        new Recipe("Test recipe", "This is a test recipe", "http://santementalephysique.com/wp-content/uploads/2020/09/k_Photo_Recipes_2020-03-Easy-Philly-Cheesesteak-Sliders_2020-02_Easy-Philly-Cheesesteak-Sliders_318.jpg")
      ];

    recipeSelected = new EventEmitter<Recipe>();

      //this method helps in providing new refrence to recipes array rather than the reference to recipes itself
      getRecipes(){
          return this.recipes.slice();
      }
}