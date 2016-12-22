import { Component, Input } from '@angular/core';
import { MainLayoutTypes, FormTypes } from "../../../shared/enums";
export var MainLayoutTextComponent = (function () {
    function MainLayoutTextComponent() {
        this.layoutTypes = MainLayoutTypes;
        this.form_types = FormTypes;
    }
    MainLayoutTextComponent.prototype.ngOnInit = function () { };
    MainLayoutTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-main-layout-text',
                    templateUrl: 'main-layout-text.component.html',
                    styleUrls: ['main-layout-text.component.css']
                },] },
    ];
    /** @nocollapse */
    MainLayoutTextComponent.ctorParameters = [];
    MainLayoutTextComponent.propDecorators = {
        'main': [{ type: Input },],
    };
    return MainLayoutTextComponent;
}());
