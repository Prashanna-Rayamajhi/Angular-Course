import { Component, ElementRef,  OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/Services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", {static: false}) nameInputRef: ElementRef | undefined;
  @ViewChild("amountInput", {static:false}) amountInputRef: ElementRef | undefined;


  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const nameOfIngredient = this.nameInputRef?.nativeElement.value;
    const amountOfIngredient = this.amountInputRef?.nativeElement.value;

    const newIngredient = new Ingredient(nameOfIngredient, amountOfIngredient);

    this.slService.onIngridientAdded(newIngredient);    
  }
}
