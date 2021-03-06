import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, Subject, tap, throwError } from "rxjs";

import { User } from "../user.model";

export interface AuthenticationResponse{
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
};



@Injectable({providedIn: 'root'})
export class AuthenticationService{
    //constructor for the authentication service
    private readonly authSignUpApi: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnG-oQhw4VSuY5Nv2521RZOSYPe8ldIzA';

    private readonly authSignInApi: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnG-oQhw4VSuY5Nv2521RZOSYPe8ldIzA';

    user = new BehaviorSubject<User | any>(null);
    tokenExpirationTimer!: any

    constructor(private http: HttpClient, private route: Router){}

    SignUp(email: string, password: string){
       return this.http.post<AuthenticationResponse>(this.authSignUpApi, 
        {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(
            catchError(this.handleError),
            tap(resData => {
                this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
            }));
    }
    //method for loging in the user
    Login(email: string, password: string){
        return this.http.post<AuthenticationResponse>(this.authSignInApi, {
            email: email,
            password: password,
            returnSecureToken : true
        })
        .pipe(
            catchError(this.handleError),
            tap(resData => {
                this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
            })
        )
    }

    Logout(){
        this.user.next(null);
        this.route.navigate(['./authentication']);
        localStorage.removeItem('userData');
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }
    AutoLogout(expirationTimer: number){
        this.tokenExpirationTimer = setTimeout(()=> {
            this.Logout();
        }, expirationTimer)
    }

    AutoLogin(){
        const userData: {
            email: string,
            id: string,
            _token: string,
            _tokenExpirationDate: string
        } | null = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')?? ''): null;

        if(!userData){
            return;
        }
        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

        const expirationTime = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime()
        this.AutoLogout(expirationTime);
        if(loadedUser.token != ''){
            this.user.next(loadedUser);
        }
    }

    //method for handling the authentication
    private handleAuthentication(email: string, localId: string, token: string, expiresIn: number){

        const expirationDate = new Date(new Date().getTime() + (expiresIn * 1000));
        const user = new User(email, localId, token, expirationDate);
        //emitting the created user using subject
        this.user.next(user);
        this.AutoLogout(expiresIn * 1000);
        //sptring data into the local storage
        localStorage.setItem('userData', JSON.stringify(user));
    }



    private handleError(errorRes: HttpErrorResponse){
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
        case "EMAIL_NOT_FOUND":
            errorMessage = "There is no record corresponding to this identifier"
            break; 
        case "INVALID_PASSWORD":
            errorMessage = "Password provided is invalid"
            break;       
        default:
            errorMessage = "An error occured!!!"        
    }
    return throwError(()=> new Error(errorMessage));
    }
}