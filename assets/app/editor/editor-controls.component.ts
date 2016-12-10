import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
    selector: 'dip-editor-controls',
    templateUrl: './editor-controls.component.html',
    styleUrls: ['./editor-controls.component.css']
})
export class EditorControlsComponent {

    @Output() deletePage = new EventEmitter<Number>();
    @Output() changeSelectedPage = new EventEmitter<Number>();
    @Output() saveSolution = new EventEmitter();

    @Input() pages;
    @Input() page;
    @Input() index;

    public showPages: boolean = false;

    constructor() { }

    //clone object and add it to pages
    onSave(){
        this.saveSolution.emit();
    }

    displayPages(){
        this.showPages = !this.showPages;
    }

    //clone object and add it to pages
    onAddPage(){
        let firstPage = JSON.parse(JSON.stringify(this.pages[0]));
            // Object.assign({},this.pages[0]);
        this.pages.push(firstPage);
    }

    //delete current page and set the the new current page to page 1
    onDeletePage(index: Number){
        this.deletePage.emit(index);
    }

    onChangePage(type: number){
        this.changeSelectedPage.emit(type);
        this.showPages = false;
    }
}