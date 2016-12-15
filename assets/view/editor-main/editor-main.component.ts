import { Component, Input } from "@angular/core";
import { Main } from "../../app/editor/models/main";
import { SolutionThemes } from "../../app/shared/enums";

@Component({
    selector: 'dip-editor-main',
    templateUrl: './editor-main.component.html'
})
export class EditorMainComponent{
    @Input() public main: Main;
    @Input() theme: Number;

    public solutionThemes = SolutionThemes;

    constructor() { }
}