import { Component,OnDestroy,OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/shared/Services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes!: Recipe[];
  recipeCollectionUpdateSubscription!: Subscription;
  constructor(private recipeService : RecipeService) { }

  

  ngOnInit(){
    this.recipeCollectionUpdateSubscription = this.recipeService.recipeCollectionUpdated.subscribe((recipesFromService: Recipe[])=>{
      this.recipes = recipesFromService;
    })
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.recipeCollectionUpdateSubscription.unsubscribe();
  }
 

}
