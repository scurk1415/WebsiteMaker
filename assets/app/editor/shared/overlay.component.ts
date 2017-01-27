import { Component, Input } from "@angular/core";
import { Main } from "../models/main";

@Component({
    selector: 'dip-editor-overlay',
    templateUrl: 'overlay.component.html',
    styleUrls: ['overlay.component.css']
})

export class OverlayComponent {
    @Input() element: any;
    @Input() main_contents: Main[];
    @Input() main: Main;

    constructor(){}

    addMainContent(){
        let index = this.main_contents.indexOf(this.main) + 1;
        this.main_contents.splice(index,0, new Main());
    }

    deleteMainContent(){
        let index = this.main_contents.indexOf(this.main);
        this.main_contents.splice(index,1);
    }
}