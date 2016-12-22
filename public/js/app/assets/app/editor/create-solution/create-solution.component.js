import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { EditorService } from "../editor.service";
import { Router } from "@angular/router";
import { ErrorService } from "../../error/error.service";
export var CreateSolutionComponent = (function () {
    function CreateSolutionComponent(_fb, _editorSvc, _router, _errorSvc) {
        this._fb = _fb;
        this._editorSvc = _editorSvc;
        this._router = _router;
        this._errorSvc = _errorSvc;
    }
    CreateSolutionComponent.prototype.ngOnInit = function () {
        this.createSolutionForm = this._fb.group({
            name: ['', Validators.required]
        });
    };
    CreateSolutionComponent.prototype.onSubmit = function () {
        var _this = this;
        this._editorSvc.createSolution(this.createSolutionForm.value).subscribe(function (data) {
            _this._router.navigateByUrl('/editor/' + data._id);
        }, function (error) {
            console.log(error);
            _this._errorSvc.handleError(error);
        });
    };
    CreateSolutionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-create-solution',
                    templateUrl: './create-solution.component.html'
                },] },
    ];
    /** @nocollapse */
    CreateSolutionComponent.ctorParameters = [
        { type: FormBuilder, },
        { type: EditorService, },
        { type: Router, },
        { type: ErrorService, },
    ];
    return CreateSolutionComponent;
}());
