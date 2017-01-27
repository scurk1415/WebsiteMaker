import { Component, OnInit, Input } from "@angular/core";

import { Solution } from "../models/solution";
import { Page } from "../models/page";

@Component({
    selector: 'dip-editor-normal',
    templateUrl: 'editor-normal.component.html'
})
export class EditorNormalComponent implements OnInit{
    @Input() solution: Solution;
    @Input() page: Page;

    public test = [1,2];

    constructor (){}

    ngOnInit(): void {
    }

}