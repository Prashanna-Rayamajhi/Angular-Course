import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take, tap } from "rxjs";
import { AuthenticationService } from "./authentication.service";

@Injectable({providedIn:'root'})
export class AuthGaurd implements CanActivate{
    constructor(private authService : AuthenticationService, private route: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
        return this.authService.user.pipe(
            take(1),
            map(user => !!user),
            tap(isAuth => {
                if(!isAuth){
                    return this.route.navigate(['./authentication'])
                }
                return true;
            })
        )
    }
}