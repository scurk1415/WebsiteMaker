import {Component, Input} from "@angular/core";

@Component({
    selector: 'dip-editor-overlay',
    templateUrl: './overlay.component.html'
})

export class OverlayComponent {
    @Input() element: any;
}