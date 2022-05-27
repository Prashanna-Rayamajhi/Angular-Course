import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RecipeService } from 'src/app/shared/Services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id !: number;
  editMode: boolean = false;
  recipeEditForm !: FormGroup;

  constructor(private route: ActivatedRoute, private recipeServie: RecipeService, private router: Router) { }

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
              'ingredientName': new FormControl(ingredient.name, Validators.required),
              'ingredientAmount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }

    this.recipeEditForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImageURL, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients,
    });
  }

  onSumbit(){
    const newRecipe = new Recipe(this.recipeEditForm.value['name'], 
    this.recipeEditForm.value['description'], 
    this.recipeEditForm.value['imagePath'], 
    this.recipeEditForm.value['ingredients']);

    if(this.editMode){
      this.recipeServie.updateRecipe(this.id, newRecipe);
    }
    else{
      this.recipeServie.addNewRecipe(newRecipe);
    }
    this.btnCancelClicked();
  }

  //adding the ingredients
  onAddIngredient(){
    (<FormArray>this.recipeEditForm.get('ingredients')).push(
      new FormGroup({
        'ingredientName': new FormControl(null, Validators.required),
        'ingredientAmount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  //canceling and navigating away
  btnCancelClicked(){
    this.router.navigate(['../'])
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.recipeEditForm.get('ingredients')).removeAt(index);
  }
}
