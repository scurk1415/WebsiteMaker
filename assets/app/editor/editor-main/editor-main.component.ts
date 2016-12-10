import { Component, OnInit, Input } from "@angular/core";
import { Main } from "../models/main";
import { SolutionThemes } from "../../shared/enums";

@Component({
    selector: 'dip-editor-main',
    templateUrl: './editor-main.component.html'
})
export class EditorMainComponent implements OnInit {
    @Input() public main: Main;
    @Input() theme: Number;

    public solutionThemes = SolutionThemes;

    public tmpMain= {};

    constructor() { }

    ngOnInit() {
        this.tmpMain = {
            showControl: false,
            name: "Main",
            theme_on: true
        }
    }
    
}