import { Subject } from "rxjs";
import { Ingredient } from "../ingredient.model";

export class ShoppingListService{
  onIngredientChange = new Subject<Ingredient []>();
    private ingredients: Ingredient[] = [
        new Ingredient("Tomatoes", 2),
        new Ingredient("Cheesee", 3)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }  

    onIngridientAdded(newIngredinet: Ingredient){
        this.ingredients.push(newIngredinet);
        this.onIngredientChange.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
      this.ingredients.push(...ingredients);
      this.onIngredientChange.next(this.ingredients.slice());
    }
}