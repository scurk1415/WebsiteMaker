import { Component } from "@angular/core";
import { ErrorService } from "./error.service";
export var ErrorComponent = (function () {
    function ErrorComponent(_errorSvc) {
        this._errorSvc = _errorSvc;
        this.displayError = false;
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._errorSvc.errorOccurred.subscribe(function (errorData) {
            _this.errorData = errorData;
            _this.displayError = true;
        });
    };
    ErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-error',
                    templateUrl: 'error.component.html',
                    styleUrls: ['error.component.css']
                },] },
    ];
    /** @nocollapse */
    ErrorComponent.ctorParameters = [
        { type: ErrorService, },
    ];
    return ErrorComponent;
}());
