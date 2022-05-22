import { Subject } from "rxjs";
import { Ingredient } from "../ingredient.model";

export class ShoppingListService{
  onIngredientChange = new Subject<Ingredient []>();
  startedEditingIngredient = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient("Tomatoes", 2),
        new Ingredient("Cheesee", 3)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }  
    getIngridientByID(index: number): Ingredient{
      return this.ingredients[index];
    }

    onIngridientAdded(newIngredinet: Ingredient){
        this.ingredients.push(newIngredinet);
        this.onIngredientChange.next(this.ingredients.slice());
    }
    onIngredientEdited(index: number, editedIngredient: Ingredient){
      this.ingredients[index] = editedIngredient;
      this.onIngredientChange.next(this.ingredients);
    }

    addIngredients(ingredients: Ingredient[]){
      this.ingredients.push(...ingredients);
      this.onIngredientChange.next(this.ingredients.slice());
    }
    deleteIngredient(index: number){
      this.ingredients.splice(index, 1);
      this.onIngredientChange.next(this.ingredients.slice());
    }
}