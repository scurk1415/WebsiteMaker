import { Component, Input, HostListener } from "@angular/core";

@Component({
    selector: 'dip-editor-overlay',
    templateUrl: 'overlay.component.html',
    styleUrls: ['overlay.component.css']
})

export class OverlayComponent {
    @Input() element: any;
}