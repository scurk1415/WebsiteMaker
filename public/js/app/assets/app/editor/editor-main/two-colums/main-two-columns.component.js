import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MainLayoutTypes } from "../../../shared/enums";
export var MainTwoColumnsComponent = (function () {
    function MainTwoColumnsComponent() {
        this.layoutTypes = MainLayoutTypes;
    }
    MainTwoColumnsComponent.prototype.ngOnInit = function () {
        this.tmpMain = {
            name: 'Main',
            float: false,
            theme_on: true
        };
    };
    MainTwoColumnsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-main-two-columns',
                    templateUrl: 'main-two-columns.component.html',
                    styleUrls: ['main-two-columns.component.css'],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MainTwoColumnsComponent.ctorParameters = [];
    MainTwoColumnsComponent.propDecorators = {
        'main': [{ type: Input },],
    };
    return MainTwoColumnsComponent;
}());
