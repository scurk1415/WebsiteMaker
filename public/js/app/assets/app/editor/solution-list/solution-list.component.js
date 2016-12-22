import { Component } from "@angular/core";
import { EditorService } from "../editor.service";
import { AuthService } from "../../auth/auth.service";
export var SolutionListComponent = (function () {
    function SolutionListComponent(_editorSvc, _authSvc) {
        this._editorSvc = _editorSvc;
        this._authSvc = _authSvc;
        this.solutions = [];
    }
    SolutionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get solutions by user
        this._editorSvc.getSolutions().subscribe(function (response) {
            _this.solutions = response;
        }, function (error) { return console.log('error component'); });
        //if user is loaded in service
        if (this._authSvc.user) {
            this.user = this._authSvc.user;
        }
        else {
            //get user data
            this._authSvc.getUser().subscribe(function (response) {
                _this.user = response;
            }, function (error) { return console.log(error); });
        }
    };
    SolutionListComponent.prototype.deleteSolution = function (solution) {
        this._editorSvc.deleteSolution(solution).subscribe(function (response) {
            console.log("dela");
        }, function (error) { return console.log(error); });
    };
    SolutionListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-solution-list',
                    templateUrl: './solution-list.component.html'
                },] },
    ];
    /** @nocollapse */
    SolutionListComponent.ctorParameters = [
        { type: EditorService, },
        { type: AuthService, },
    ];
    return SolutionListComponent;
}());
