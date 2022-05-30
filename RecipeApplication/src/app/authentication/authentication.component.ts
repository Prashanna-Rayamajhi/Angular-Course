import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { AuthenticationResponse, AuthenticationService } from "../shared/Services/authentication.service";

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html'
})

export class AuthenticationComponent{
    isLoginMode: boolean = false;
    isLoading: boolean = false;
    error: string | undefined;
    authObs !: Observable<AuthenticationResponse>;

    constructor(private authService: AuthenticationService, private route: Router){}
    
    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }

    onAuthFormSubmit(authForm: NgForm){
        //checking for the validity of the form
        if(!authForm.valid){
            return;
        }
        //storing the values into varirable
        const userEmail = authForm.value.email;
        const userPassword = authForm.value.password;
        //changing the loading condition
        this.isLoading = true;
        //checking if the user is logging in or signing up
        if(!this.isLoginMode){ 
            this.authObs = this.authService.SignUp(userEmail, userPassword);
        } 
        else{
            this.authObs =  this.authService.Login(userEmail, userPassword)
        }
        //subscribing to observable
        this.authObs.subscribe({
            next: response => {
                console.log(response)
                this.isLoading = false;
                this.route.navigate(['./recipes'])
            },
            error: errorRes => {
               this.error = errorRes;
                this.isLoading = false;
            }
        });
        //resetting the form
        authForm.reset();
    }

    //handling the error handling event
    OnErrorHandeled(){
        this.error = undefined;
    }
}