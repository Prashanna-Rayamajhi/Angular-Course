import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test recipe", "This is a test recipe", "https://keeprecipes.com/sites/keeprecipes/files/cauliflower-tots-2.jpg")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
