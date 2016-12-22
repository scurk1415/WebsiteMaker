import { Component, Input } from '@angular/core';
export var MainLayoutGridComponent = (function () {
    function MainLayoutGridComponent() {
    }
    MainLayoutGridComponent.prototype.ngOnInit = function () { };
    MainLayoutGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-main-layout-grid',
                    templateUrl: 'main-layout-grid.component.html'
                },] },
    ];
    /** @nocollapse */
    MainLayoutGridComponent.ctorParameters = [];
    MainLayoutGridComponent.propDecorators = {
        'main': [{ type: Input },],
    };
    return MainLayoutGridComponent;
}());
