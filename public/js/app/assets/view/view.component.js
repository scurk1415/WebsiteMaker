import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SolutionThemes } from "../app/shared/enums";
import { AppService } from "./app.service";
export var ViewComponent = (function () {
    function ViewComponent(_editorSvc, route) {
        this._editorSvc = _editorSvc;
        this.route = route;
        this.solution = null;
        this.solutionThemes = SolutionThemes;
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this._editorSvc.getSolutionById(params['id']).subscribe(function (data) {
                _this.solution = data;
                _this.page = _this.solution.pages[0];
            });
        });
        this._editorSvc.changePage.subscribe(function (data) { return _this.page = _this.solution.pages[data]; });
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-view',
                    templateUrl: './view.component.html'
                },] },
    ];
    /** @nocollapse */
    ViewComponent.ctorParameters = [
        { type: AppService, },
        { type: ActivatedRoute, },
    ];
    return ViewComponent;
}());
