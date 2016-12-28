import { Component, Output, EventEmitter, Input } from "@angular/core";
import { SolutionThemes } from "../shared/enums";
import { EditorService } from "./editor.service";
import { Settings } from "./models/settings";

@Component({
    selector: 'dip-editor-controls',
    templateUrl: './editor-controls.component.html',
    styleUrls: ['./editor-controls.component.css']
})
export class EditorControlsComponent {
    @Output() changeSelectedPage = new EventEmitter<Number>();
    @Output() saveSolution = new EventEmitter();
    @Output() changePageSolution = new EventEmitter<Number>();

    @Input() solution;
    @Input() page;
    @Input() index;
    @Input() themeId;

    public showPages: boolean = false;
    public openSettings: boolean = false;
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

    constructor(private _editorSvc: EditorService) { }

    onSave(){
        this.saveSolution.emit();
    }

    displayPages(){
        this.showPages = !this.showPages;
    }

    onSettingsClose(value: Settings){
        this.solution.settings = value;
        this.openSettings = false;
    }

    //clone object and add it to pages
    onAddPage(){
        let firstPage = JSON.parse(JSON.stringify(this.solution.pages[0]));
            // Object.assign({},this.pages[0]);
        firstPage.name = "Page";
        firstPage.unique_id = this._editorSvc.createUUID();
        this.solution.pages.push(firstPage);

        this._editorSvc.onPageAddedDeleted(this.solution.pages);
    }

    //delete current page and set the the new current page to page 1
    onDeletePage(index: Number){
        //this.deletePage.emit(index);
        this.solution.pages.splice(index,1);
        this.page = this.solution.pages[0];
        this._editorSvc.onPageAddedDeleted(this.solution.pages);
    }

    onChangePage(type: number){
        this.changeSelectedPage.emit(type);
        this.showPages = false;
    }

    changeTheme(theme: Number){
        this.changePageSolution.emit(theme);
    }
}