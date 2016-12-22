import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MainLayoutTypes } from "../../../app/shared/enums";
export var MainTwoColumnsComponent = (function () {
    function MainTwoColumnsComponent() {
        this.layoutTypes = MainLayoutTypes;
    }
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
