import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRouteModule } from './shared/Services/app-routing.service';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { Headers } from './header/header.component';
import { ShoppingModule } from './Modules/shopping.module';
import { SharedModule } from './Modules/shared.module';
import { AuthenticationModule } from './Modules/authentication.module';
import { CoreModule } from './Modules/core.module';



@NgModule({
  declarations: [
    AppComponent,
    Headers,
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShoppingModule,
    SharedModule,
    AuthenticationModule,
    CoreModule
  ],
  providers: 
  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
