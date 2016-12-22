import { Component } from '@angular/core';
export var HiddenComponent = (function () {
    function HiddenComponent() {
    }
    HiddenComponent.prototype.ngOnInit = function () { };
    HiddenComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-hidden',
                    templateUrl: 'hidden.component.html'
                },] },
    ];
    /** @nocollapse */
    HiddenComponent.ctorParameters = [];
    return HiddenComponent;
}());
