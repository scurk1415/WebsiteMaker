import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {EditorService} from "./editor.service";
import {Solution} from "./models/solution";
import { Page } from "./models/page";

@Component({
    selector: 'dip-editor',
    templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit, OnDestroy{

    public solution: Solution = null;
    private subscription: Subscription;
    public page: Page;

    constructor (private _editorSvc: EditorService, private route: ActivatedRoute){}

    ngOnInit(): void {
        this.subscription = this.route.params.subscribe(
            (params: any) => {
                this.solution = this._editorSvc.getSolutionById(params['id']);
                if (this.solution){
                    this.page = this.solution.pages[0];
                }

                this._editorSvc.solutionRetrieved.subscribe(
                    (solution: Solution) => {
                        this.solution = solution;
                        this.page = this.solution.pages[0];
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

    changeCurrentPage(prevNext){
        let currentIndex = this.solution.pages.indexOf(this.page);

        if (prevNext == '+' && currentIndex < this.solution.pages.length - 1){
            this.page = this.solution.pages[currentIndex + 1];
        }
        else if(prevNext == '-' && currentIndex > 0){
            this.page = this.solution.pages[currentIndex +- 1];
        }
    }

    deletePage(index: number){
        this.solution.pages.splice(index,1);
        this.page = this.solution.pages[0];
    }

    ngOnDestroy(): void{
        this.subscription.unsubscribe();
    }
}