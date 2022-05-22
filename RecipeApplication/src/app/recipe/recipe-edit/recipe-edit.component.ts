import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { from } from 'rxjs';
import { RecipeService } from 'src/app/shared/Services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id !: number;
  editMode: boolean = false;
  recipeEditForm !: FormGroup;

  constructor(private route: ActivatedRoute, private recipeServie: RecipeService) { }

  get controls() { // a getter!
    return (<FormArray>this.recipeEditForm.get('ingredients')).controls;
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params)=> {
        this.id = +params['id'];
        this.editMode = params['id'] != null;

        //initialzing the form
        this.initializeForm();
      }
    )
  }

  private initializeForm(){
    let recipeName = '';
    let recipeImageURL = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipeToEdit = this.recipeServie.getRecipeByID(this.id);
      recipeName = recipeToEdit.name;
      recipeImageURL = recipeToEdit.imagePath;
      recipeDescription = recipeToEdit.decription;

      //looking if the racipe has an ingredients
      if(recipeToEdit['ingredients']){
        for(let ingredient of recipeToEdit['ingredients']){
          recipeIngredients.push(
            new FormGroup({
              'ingredientName': new FormControl(ingredient.name),
              'ingredientAmount': new FormControl(ingredient.amount)
            })
          )
        }
      }
    }

    this.recipeEditForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImageURL),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients,
    });
  }

  onSumbit(){
    console.log(this.recipeEditForm);
  }
}
