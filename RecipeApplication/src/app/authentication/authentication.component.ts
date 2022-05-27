import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { AuthenticationService } from "../shared/Services/authentication.service";

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html'
})

export class AuthenticationComponent{
    isLoginMode: boolean = false;
    isLoading: boolean = false;
    error: string | undefined;

    constructor(private authService: AuthenticationService){}
    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }

    onAuthFormSubmit(authForm: NgForm){
        if(!authForm.valid){
            return;
        }
        if(!this.isLoginMode){
            const userEmail = authForm.value.email;
            const userPassword = authForm.value.password;

            this.isLoading = true;
            this.authService.SignUp(userEmail, userPassword).subscribe({
                next: response => {
                    console.log(response)
                    this.isLoading = false;
                },
                error: errorRes => {
                   this.error = errorRes;
                    this.isLoading = false;
                }
            });
        }

        authForm.reset();
    }
}