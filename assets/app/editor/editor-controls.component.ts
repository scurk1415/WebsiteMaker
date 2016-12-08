import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
    selector: 'dip-editor-controls',
    templateUrl: './editor-controls.component.html'
})
export class EditorControlsComponent {

    @Output() changeSelectedPage = new EventEmitter<string>();
    @Output() saveSolution = new EventEmitter();

    @Input() pages;

    constructor() { }

    save(){
        this.saveSolution.emit();
    }

    addPage(){
        let firstPage = this.pages[0];
        this.pages.push(firstPage);
    }

    changePage(type: string){
        this.changeSelectedPage.emit(type);
    }
}