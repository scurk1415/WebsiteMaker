import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EditorService } from "./editor.service";
import { SolutionThemes } from "../shared/enums";
export var EditorComponent = (function () {
    function EditorComponent(_editorSvc, route) {
        this._editorSvc = _editorSvc;
        this.route = route;
        this.solution = null;
        this.solutionThemes = SolutionThemes;
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.solution = _this._editorSvc.getSolutionById(params['id']);
            if (_this.solution) {
                _this.page = _this.solution.pages[0];
            }
            _this._editorSvc.solutionRetrieved.subscribe(function (solution) {
                _this.solution = solution;
                _this.page = _this.solution.pages[0];
            });
        });
    };
    EditorComponent.prototype.saveSolution = function () {
        this._editorSvc.saveSolution(this.solution).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    EditorComponent.prototype.changeCurrentPage = function (index) {
        var currentIndex = this.solution.pages.indexOf(this.page);
        if (index != currentIndex) {
            this.page = this.solution.pages[index];
        }
    };
    EditorComponent.prototype.changeTheme = function (value) {
        this.solution.pages[this.solution.pages.indexOf(this.page)].theme = value;
    };
    EditorComponent.prototype.deletePage = function (index) {
        this.solution.pages.splice(index, 1);
        this.page = this.solution.pages[0];
    };
    EditorComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    EditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-editor',
                    templateUrl: './editor.component.html'
                },] },
    ];
    /** @nocollapse */
    EditorComponent.ctorParameters = [
        { type: EditorService, },
        { type: ActivatedRoute, },
    ];
    return EditorComponent;
}());
