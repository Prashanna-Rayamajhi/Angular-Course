import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective{
    private isOpen: boolean = false;
    constructor(private elementRef: ElementRef, private renderer : Renderer2) { }
   
    @HostListener('click') toggleShow(){
        this.isOpen = !this.isOpen
        let toggleEl = this.elementRef.nativeElement.querySelector(".dropdown-menu");
        if(this.isOpen){
            this.renderer.addClass(toggleEl, 'show');
        }else{
            this.renderer.removeClass(toggleEl, 'show');
        }
    }

}