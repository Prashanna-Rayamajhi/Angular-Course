import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test recipe", "This is a test recipe", "http://santementalephysique.com/wp-content/uploads/2020/09/k_Photo_Recipes_2020-03-Easy-Philly-Cheesesteak-Sliders_2020-02_Easy-Philly-Cheesesteak-Sliders_318.jpg"),
    new Recipe("Test recipe", "This is a test recipe", "http://santementalephysique.com/wp-content/uploads/2020/09/k_Photo_Recipes_2020-03-Easy-Philly-Cheesesteak-Sliders_2020-02_Easy-Philly-Cheesesteak-Sliders_318.jpg")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
