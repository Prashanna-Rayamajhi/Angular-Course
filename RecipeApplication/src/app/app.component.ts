import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'RecipeApplication';

  loadedComponent: string = 'Recipe';

  OnNavigate(feature: string){
    this.loadedComponent = feature;
  }
}
