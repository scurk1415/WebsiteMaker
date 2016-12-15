import { Component, Output, EventEmitter, Input } from "@angular/core";
import { SolutionThemes } from "../shared/enums";

@Component({
    selector: 'dip-editor-controls',
    templateUrl: './editor-controls.component.html',
    styleUrls: ['./editor-controls.component.css']
})
export class EditorControlsComponent {

    @Output() deletePage = new EventEmitter<Number>();
    @Output() changeSelectedPage = new EventEmitter<Number>();
    @Output() saveSolution = new EventEmitter();
    @Output() changePageSolution = new EventEmitter<Number>();

    @Input() solution;
    @Input() page;
    @Input() index;
    @Input() themeId;

    public showPages: boolean = false;
    public themeTypes = SolutionThemes;
    public themes = [
        {
            name: 'Normal',
            value: this.themeTypes.Normal
        },
        {
            name: 'Two columns',
            value: this.themeTypes.TwoColumns
        },
    ];

    constructor() { }

    onSave(){
        this.saveSolution.emit();
    }

    displayPages(){
        this.showPages = !this.showPages;
    }

    //clone object and add it to pages
    onAddPage(){
        let firstPage = JSON.parse(JSON.stringify(this.solution.pages[0]));
            // Object.assign({},this.pages[0]);
        this.solution.pages.push(firstPage);
    }

    //delete current page and set the the new current page to page 1
    onDeletePage(index: Number){
        this.deletePage.emit(index);
    }

    onChangePage(type: number){
        this.changeSelectedPage.emit(type);
        this.showPages = false;
    }

    changeTheme(theme: Number){
        this.changePageSolution.emit(theme);
    }
}