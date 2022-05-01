import { EventEmitter } from "@angular/core";
import { Ingredient } from "../ingredient.model";

export class ShoppingListService{
  onIngredientChange = new EventEmitter<Ingredient []>();
    private ingredients: Ingredient[] = [
        new Ingredient("Tomatoes", 2),
        new Ingredient("Cheesee", 3)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }  

    onIngridientAdded(newIngredinet: Ingredient){
        this.ingredients.push(newIngredinet);
        this.onIngredientChange.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
      this.ingredients.push(...ingredients);
      this.onIngredientChange.emit(this.ingredients.slice());
    }
}