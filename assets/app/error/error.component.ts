import {Component, OnInit} from "@angular/core";
import {Error} from "./error";
import {ErrorService} from "./error.service";

@Component({
    selector: 'dip-error',
    templateUrl: 'error.component.html',
    styleUrls: ['error.component.css']
})
export class ErrorComponent implements OnInit{
    public displayError: boolean = false;
    public errorData: Error;

    constructor(private _errorSvc: ErrorService){}

    ngOnInit(){
        this._errorSvc.errorOccurred.subscribe(
            (errorData: Error) => {
                this.errorData = errorData;
                this.displayError = true;
            }
        );
    }
}