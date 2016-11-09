import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";
import { Footer } from "../models/footer";

@Component({
    selector: 'dip-footer-style',
    templateUrl: 'footer-style.component.html'
})
export class FooterStyleComponent implements OnInit {
    @Input() footer: Footer;

    constructor() { }

    ngOnInit() { }
    
}