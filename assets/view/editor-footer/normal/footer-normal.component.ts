import { Component, Input } from '@angular/core';
import { Footer } from "../../../app/editor/models/footer";

@Component({
    selector: 'dip-footer-normal',
    templateUrl: 'footer-normal.component.html',
    styleUrls: ['footer-normal.component.css']
})
export class FooterNormalComponent {
    @Input() footer: Footer;
    constructor() { }
}