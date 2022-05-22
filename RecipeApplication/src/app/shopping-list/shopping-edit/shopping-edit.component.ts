import { Component, ElementRef,  OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/Services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 // @ViewChild("nameInput", {static: false}) nameInputRef: ElementRef | undefined;
  //@ViewChild("amountInput", {static:false}) amountInputRef: ElementRef | undefined;

  @ViewChild("shoppingEdit", {static: false}) shoppingEditFromRef !: NgForm;
   ingredientEditingSubscription!: Subscription;
   editMode: boolean = false;
   editingIngredientID !: number;
   editingIngredient !: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredientEditingSubscription = this.slService.startedEditingIngredient.subscribe((id: number)=>{
      this.editMode = true;
      this.editingIngredientID = id;
      this.editingIngredient = this.slService.getIngridientByID(id);
      this.shoppingEditFromRef.setValue({
        "ingredientName": this.editingIngredient.name,
        "ingredientAmount": this.editingIngredient.amount
      });
    });
  }

  onAddItem(shoppingEditForm: NgForm){
    // const nameOfIngredient = this.nameInputRef?.nativeElement.value;
    // const amountOfIngredient = this.amountInputRef?.nativeElement.value;

    const shoppingEditFormValues = shoppingEditForm.value;

    const newIngredient = new Ingredient(shoppingEditFormValues.ingredientName, shoppingEditFormValues.ingredientAmount);
    if(!this.editMode){
      this.slService.onIngridientAdded(newIngredient);  
    }
    else
    {
      this.slService.onIngredientEdited( this.editingIngredientID ,newIngredient);
    } 
    this.editMode = false;
    shoppingEditForm.reset();
  }

  onReset(){
    this.editMode = false;
    this.shoppingEditFromRef.reset();
  }

  onDelete(){
    this.slService.deleteIngredient(this.editingIngredientID);
    this.onReset();
  }
}
