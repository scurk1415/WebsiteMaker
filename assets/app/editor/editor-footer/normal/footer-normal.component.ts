import { Component, OnInit, Input } from '@angular/core';

import { Footer } from "../../models/footer";

@Component({
    selector: 'dip-footer-normal',
    templateUrl: 'footer-normal.component.html',
    styleUrls: ['footer-normal.component.css']
})
export class FooterNormalComponent implements OnInit {
    @Input() footer: Footer;

    public tmpFooter= {
        showControl: false,
        name: "Footer",
        showOverlay: false
    };
    constructor() { }

    ngOnInit() { }

}