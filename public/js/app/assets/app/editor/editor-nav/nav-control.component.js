import { Component, Input } from "@angular/core";
import { NavItem } from "../models/nav";
import { ControlViews, NavActionTypes } from "../../shared/enums";
import { SelectListItem } from "../../shared/controls/select-list-item";
import { EditorService } from "../editor.service";
export var NavControlComponent = (function () {
    function NavControlComponent(_editorSvc) {
        this._editorSvc = _editorSvc;
        this.controlViews = ControlViews;
        this.navActionTypes = NavActionTypes;
        this.action_types = [];
        this.solution_pages = [];
        this.edit = new Array();
    }
    NavControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.nav.menu) {
            this.nav.menu = [];
        }
        this.action_types = [
            { text: "Url", value: this.navActionTypes.Url },
            { text: "App page", value: this.navActionTypes.AppPage }
        ];
        this._editorSvc.pageAddedDeleted.subscribe(function (data) {
            _this.pages = data;
            _this.onPagesChange();
        });
        this.onPagesChange();
    };
    NavControlComponent.prototype.onPagesChange = function () {
        this.solution_pages = [];
        this.solution_pages.push(new SelectListItem("Select page", ""));
        for (var i = 0; i < this.pages.length; i++) {
            var item = new SelectListItem(this.pages[i].name, i);
            this.solution_pages.push(item);
        }
    };
    NavControlComponent.prototype.addItem = function () {
        var item = new NavItem("Link");
        item.action_type == this.navActionTypes.Url;
        this.nav.menu.push(item);
    };
    NavControlComponent.prototype.deleteItem = function (item) {
        var index = this.nav.menu.indexOf(item);
        this.nav.menu.splice(index, 1);
    };
    NavControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-nav-control',
                    templateUrl: 'nav-control.component.html'
                },] },
    ];
    /** @nocollapse */
    NavControlComponent.ctorParameters = [
        { type: EditorService, },
    ];
    NavControlComponent.propDecorators = {
        'nav': [{ type: Input },],
        'pages': [{ type: Input },],
        'tmpNav': [{ type: Input },],
    };
    return NavControlComponent;
}());
