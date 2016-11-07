import {Component, OnInit, Input} from "@angular/core";
import {Nav} from "../models/nav";

@Component({
    selector: 'dip-editor-nav',
    templateUrl: 'editor-nav.component.html',
    styleUrls: ['nav.component.css']
})
export class EditorNavComponent implements OnInit {
    @Input() nav: Nav;
    public tmpNav = { showControl: false};

    constructor() { }

    ngOnInit() { }
    
}