import {Component, OnInit} from "@angular/core";
import {EditorService} from "../editor.service";
import {Solution} from "../models/solution";

@Component({
    selector: 'dip-solution-list',
    templateUrl: './solution-list.component.html'
})
export class SolutionListComponent implements OnInit {
    public solutions: Solution[] = [];

    constructor(private _editorSvc: EditorService) { }

    ngOnInit() {
        this._editorSvc.getSolutions().subscribe(
            response => {
                this.solutions = response
            },
            error => console.log('error component')
        )
    }

    deleteSolution(solution: Solution){
        this._editorSvc.deleteSolution(solution).subscribe(
            response => {
                console.log("dela");
            },
            error => console.log(error)
        );
    }
}