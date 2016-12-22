import { Component, Input } from '@angular/core';
import { MainLayoutTypes } from "../../shared/enums";
export var MainThemeComponent = (function () {
    function MainThemeComponent() {
        this.layoutTypes = MainLayoutTypes;
    }
    MainThemeComponent.prototype.ngOnInit = function () { };
    MainThemeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-main-theme',
                    templateUrl: 'main-theme.component.html'
                },] },
    ];
    /** @nocollapse */
    MainThemeComponent.ctorParameters = [];
    MainThemeComponent.propDecorators = {
        'main': [{ type: Input },],
    };
    return MainThemeComponent;
}());
