import { Component, Input, OnInit} from '@angular/core';
import { RecipeService } from 'src/app/shared/Services/recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  recipe!: Recipe;
 

  constructor(private recipeService: RecipeService) {
   
    
  }
  OnSelect(){
   this.recipeService.recipeSelected.emit(this.recipe)
  }


  ngOnInit(): void {
  }

}
