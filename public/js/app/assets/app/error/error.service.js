import { EventEmitter } from "@angular/core";
import { Error } from "./error";
export var ErrorService = (function () {
    function ErrorService() {
        this.errorOccurred = new EventEmitter();
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new Error(error.title, error.obj.message);
        this.errorOccurred.emit(errorData);
    };
    return ErrorService;
}());
