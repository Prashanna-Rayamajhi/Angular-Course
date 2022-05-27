import { Component} from "@angular/core";
import { DataStorageService } from "../shared/Services/data-storage.service";

@Component({
    selector : "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})
export class Headers {
//    @Output() FeatureSelected = new EventEmitter<string>();

    // OnSelect(feature: string){
    //     this.FeatureSelected.emit(feature);
    // }
    constructor(private dataStorageService: DataStorageService){}

    onSaveData(){
        this.dataStorageService.SaveRecipe();
    }
    onFetchData(){
        this.dataStorageService.FetchRecipes().subscribe();
    }
}