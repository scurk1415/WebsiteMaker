import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MainLayoutTypes } from "../../../app/shared/enums";
export var MainNormalComponent = (function () {
    function MainNormalComponent() {
        this.layoutTypes = MainLayoutTypes;
    }
    MainNormalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-main-normal',
                    templateUrl: 'main-normal.component.html',
                    styleUrls: ['main-normal.component.css'],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MainNormalComponent.ctorParameters = [];
    MainNormalComponent.propDecorators = {
        'main': [{ type: Input },],
    };
    return MainNormalComponent;
}());
