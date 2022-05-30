import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "../shared/Services/auth-interceptor.service";
import { RecipeService } from "../shared/Services/recipe.service";
import { ShoppingListService } from "../shared/Services/shopping-list.service";

@NgModule({
    providers:[
        RecipeService,
        ShoppingListService, 
     
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
    ]
})
export class CoreModule{}