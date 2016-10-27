import {EventEmitter} from "@angular/core";
import {Error} from "./error";

export class ErrorService {
    public errorOccurred = new EventEmitter<Error>();

    handleError(error: any){
        let errorData = new Error(error.title, error.obj.message);
        this.errorOccurred.emit(errorData);
    }
}