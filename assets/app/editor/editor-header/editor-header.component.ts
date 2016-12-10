import {Component, OnInit, Input} from "@angular/core";
import {Header} from "../models/header";
import { SolutionThemes } from "../../shared/enums";

@Component({
    selector: 'dip-editor-header',
    templateUrl: 'editor-header.component.html'
})
export class EditorHeaderComponent implements OnInit {
    @Input() header: Header;
    public tmpHeader = {};
    @Input() theme: Number;

    public solutionThemes = SolutionThemes;

    constructor() { }

    ngOnInit() {
        this.tmpHeader = {
            showControl: false,
            name: "Header"
        };
    }
    
}