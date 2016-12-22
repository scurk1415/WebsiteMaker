import { Component, Input } from '@angular/core';
import { ControlViews } from "../../shared/enums";
export var ControlHeaderComponent = (function () {
    function ControlHeaderComponent() {
        this.controlViews = ControlViews;
    }
    ControlHeaderComponent.prototype.ngOnInit = function () {
        this.control.selection = this.controlViews.Edit;
    };
    ControlHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-control-header',
                    templateUrl: 'control-header.component.html',
                    styleUrls: ['control-header.component.css']
                },] },
    ];
    /** @nocollapse */
    ControlHeaderComponent.ctorParameters = [];
    ControlHeaderComponent.propDecorators = {
        'control': [{ type: Input },],
    };
    return ControlHeaderComponent;
}());
