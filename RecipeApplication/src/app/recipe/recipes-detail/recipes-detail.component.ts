import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RecipeService } from 'src/app/shared/Services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipe!: Recipe;
  id !: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params) =>{
        this.id = +param['id'];
        this.recipe = this.recipeService.getRecipeByID(this.id);
      }
    )
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  onDelete(){
    if(confirm("Are you sure you want to delete the recipe?")){
      this.recipeService.deleteRecipe(this.id);
      this.router.navigate(['/recipes'])
    }
    return;
  }
}
