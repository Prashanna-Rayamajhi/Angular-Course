import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

interface AuthenticationResponse{
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}

@Injectable({providedIn: 'root'})
export class AuthenticationService{
    //constructor for the authentication service
    private readonly authSignUpApi: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnG-oQhw4VSuY5Nv2521RZOSYPe8ldIzA';

    constructor(private http: HttpClient){}

    SignUp(email: string, password: string){
       return this.http.post<AuthenticationResponse>(this.authSignUpApi, 
        {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(
            catchError(errorRes => {
                let errorMessage = "An unknown error occurred!!!";
                if(!errorRes.error || !errorRes.error.error){
                    return throwError(()=>new Error(errorMessage));
                }
            switch(errorRes.error.error.message){
                case "EMAIL_EXISTS":
                    errorMessage = "Email provided already exists!!!"
                    break;
                case "OPERATION_NOT_ALLOWED": 
                    errorMessage = "Password signin is disabled for this operation"
                    break;
                default:
                    errorMessage = "An error occured!!!"        
            }
            return errorMessage;
        }));
    }
}