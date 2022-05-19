import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/Services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[];
  private ingredientsChangeSubscription!: Subscription;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();

    this.ingredientsChangeSubscription = this.slService.onIngredientChange.subscribe(
      (ingredientsArr: Ingredient[]) => {this.ingredients = ingredientsArr}
    );
  };

  //unsubscribing to the observable when ever the component is distroyed by the angular
  ngOnDestroy(): void {
    this.ingredientsChangeSubscription.unsubscribe();
  }
  

}
