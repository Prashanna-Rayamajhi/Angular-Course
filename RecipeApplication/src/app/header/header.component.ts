import { Component, OnDestroy, OnInit} from "@angular/core";
import { Subscription } from "rxjs";
import { AuthenticationService } from "../shared/Services/authentication.service";
import { DataStorageService } from "../shared/Services/data-storage.service";

@Component({
    selector : "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})
export class Headers implements OnInit, OnDestroy {
//    @Output() FeatureSelected = new EventEmitter<string>();

    // OnSelect(feature: string){
    //     this.FeatureSelected.emit(feature);
    // }
    private userSubscription !: Subscription;
    isAuthenticated: boolean = false;

    constructor(private dataStorageService: DataStorageService, private authService: AuthenticationService){}

    ngOnInit(): void {
        this.userSubscription = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
        });
    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }

    onSaveData(){
        this.dataStorageService.SaveRecipe();
    }
    onFetchData(){
        this.dataStorageService.FetchRecipes().subscribe();
    }
    onLogout(){
        this.authService.Logout()
        
    }
}