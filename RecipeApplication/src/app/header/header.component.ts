import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector : "app-header",
    templateUrl: "./header.component.html"
})
export class Headers {
   @Output() FeatureSelected = new EventEmitter<string>();

    OnSelect(feature: string){
        this.FeatureSelected.emit(feature);
    }
}