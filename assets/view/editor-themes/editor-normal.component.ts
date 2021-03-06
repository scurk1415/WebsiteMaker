import { Component, OnInit, Input } from "@angular/core";
import { Solution } from "../../app/editor/models/solution";
import { Page } from "../../app/editor/models/page";

@Component({
    selector: 'dip-editor-normal',
    templateUrl: 'editor-normal.component.html'
})
export class EditorNormalComponent implements OnInit{
    @Input() solution: Solution;
    @Input() page: Page;

    constructor (){}

    ngOnInit(): void {
    }

}