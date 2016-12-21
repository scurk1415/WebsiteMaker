import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Solution } from "../app/editor/models/solution";
import { Page } from "../app/editor/models/page";
import { SolutionThemes } from "../app/shared/enums";
import { AppService } from "./app.service";

@Component({
    selector: 'dip-view',
    templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit, OnDestroy{

    public solution: Solution = null;
    private subscription: Subscription;
    public page: Page;

    public solutionThemes = SolutionThemes;

    constructor (private _editorSvc: AppService, private route: ActivatedRoute){}

    ngOnInit(): void {
        this.subscription = this.route.params.subscribe(
            (params: any) => {
                this._editorSvc.getSolutionById(params['id']).subscribe(
                    (data: Solution) => {
                        this.solution = data;
                        this.page = this.solution.pages[0];
                    }
                );
            }
        );

        this._editorSvc.changePage.subscribe(
            data => this.page = this.solution.pages[data]
        )
    }


    ngOnDestroy(): void{
        this.subscription.unsubscribe();
    }
}