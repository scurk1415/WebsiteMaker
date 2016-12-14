import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EditorService } from "../editor.service";
import { Router } from "@angular/router";
import { ErrorService } from "../../error/error.service";
import { Solution } from "../models/solution";

@Component({
    selector: 'dip-create-solution',
    templateUrl: './create-solution.component.html'
})
export class CreateSolutionComponent implements OnInit {
    public createSolutionForm: FormGroup;

    constructor(private _fb: FormBuilder, private _editorSvc: EditorService, private _router: Router, private _errorSvc: ErrorService) { }

    ngOnInit() {
        this.createSolutionForm = this._fb.group(
            {
                name: ['', Validators.required]
            }
        )
    }

    onSubmit(){
        this._editorSvc.createSolution(this.createSolutionForm.value).subscribe(
            (data: Solution) => {
                this._router.navigateByUrl('/editor/'+ data._id);
            },
            error => {
                console.log(error);
                this._errorSvc.handleError(error);
            }
        );
    }
    
}