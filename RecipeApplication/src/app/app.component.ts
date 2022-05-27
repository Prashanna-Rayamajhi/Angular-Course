import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './shared/Services/authentication.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit{
  title = 'RecipeApplication';

  constructor(private authService: AuthenticationService){}
 // loadedComponent: string = 'Recipe';

  // OnNavigate(feature: string){
  //   this.loadedComponent = feature;
  // }

  ngOnInit(): void {
    this.authService.AutoLogin();
  }
}
