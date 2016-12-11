import { Component, OnInit, Input } from "@angular/core";
import { Nav } from "../models/nav";
import { SolutionThemes } from "../../shared/enums";

@Component({
    selector: 'dip-editor-nav',
    templateUrl: 'editor-nav.component.html'
})
export class EditorNavComponent implements OnInit {
    @Input() nav: Nav;
    @Input() pages;
    @Input() theme: Number;

    public solutionThemes = SolutionThemes;


    constructor() { }

    ngOnInit() {
        console.log(this.theme);
    }
    
}