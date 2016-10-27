import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {EditorService} from "./editor.service";
import {Solution} from "./models/solution";

@Component({
    selector: 'dip-editor',
    templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit, OnDestroy{

    public solution: Solution = null;
    private subscription: Subscription;

    constructor (private _editorSvc: EditorService, private route: ActivatedRoute, private _router: Router){}

    ngOnInit(): void {
        this.subscription = this.route.params.subscribe(
            (params: any) => {
                this.solution = this._editorSvc.getSolutionById(params['id']);

                this._editorSvc.solutionRetrieved.subscribe(
                    (solution: Solution) => {
                        this.solution = solution
                    }
                )
            }
        );
    }

    saveSolution(){
        this._editorSvc.saveSolution(this.solution).subscribe(
            data => console.log(data),
            error => console.log(error)
        );
    }

    ngOnDestroy(): void{
        this.subscription.unsubscribe();
    }
}