import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'dip-editor-controls',
    templateUrl: './editor-controls.component.html'
})
export class EditorControlsComponent {
    @Output() saveSolution = new EventEmitter();

    constructor() { }

    save(){
        this.saveSolution.emit();
    }
}