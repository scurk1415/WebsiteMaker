import { Component, Output, EventEmitter, Input } from "@angular/core";
import { SolutionThemes } from "../shared/enums";
import { EditorService } from "./editor.service";
export var EditorControlsComponent = (function () {
    function EditorControlsComponent(_editorSvc) {
        this._editorSvc = _editorSvc;
        this.changeSelectedPage = new EventEmitter();
        this.saveSolution = new EventEmitter();
        this.changePageSolution = new EventEmitter();
        this.showPages = false;
        this.themeTypes = SolutionThemes;
        this.themes = [
            {
                name: 'Normal',
                value: this.themeTypes.Normal
            },
            {
                name: 'Two columns',
                value: this.themeTypes.TwoColumns
            },
        ];
    }
    EditorControlsComponent.prototype.onSave = function () {
        this.saveSolution.emit();
    };
    EditorControlsComponent.prototype.displayPages = function () {
        this.showPages = !this.showPages;
    };
    //clone object and add it to pages
    EditorControlsComponent.prototype.onAddPage = function () {
        var firstPage = JSON.parse(JSON.stringify(this.solution.pages[0]));
        // Object.assign({},this.pages[0]);
        firstPage.name = "Page";
        this.solution.pages.push(firstPage);
        this._editorSvc.onPageAddedDeleted(this.solution.pages);
    };
    //delete current page and set the the new current page to page 1
    EditorControlsComponent.prototype.onDeletePage = function (index) {
        //this.deletePage.emit(index);
        this.solution.pages.splice(index, 1);
        this.page = this.solution.pages[0];
        this._editorSvc.onPageAddedDeleted(this.solution.pages);
    };
    EditorControlsComponent.prototype.onChangePage = function (type) {
        this.changeSelectedPage.emit(type);
        this.showPages = false;
    };
    EditorControlsComponent.prototype.changeTheme = function (theme) {
        this.changePageSolution.emit(theme);
    };
    EditorControlsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-editor-controls',
                    templateUrl: './editor-controls.component.html',
                    styleUrls: ['./editor-controls.component.css']
                },] },
    ];
    /** @nocollapse */
    EditorControlsComponent.ctorParameters = [
        { type: EditorService, },
    ];
    EditorControlsComponent.propDecorators = {
        'changeSelectedPage': [{ type: Output },],
        'saveSolution': [{ type: Output },],
        'changePageSolution': [{ type: Output },],
        'solution': [{ type: Input },],
        'page': [{ type: Input },],
        'index': [{ type: Input },],
        'themeId': [{ type: Input },],
    };
    return EditorControlsComponent;
}());
