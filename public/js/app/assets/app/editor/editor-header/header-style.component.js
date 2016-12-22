import { Component, Input } from '@angular/core';
export var HeaderStyleComponent = (function () {
    function HeaderStyleComponent() {
    }
    HeaderStyleComponent.prototype.ngOnInit = function () { };
    HeaderStyleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-header-style',
                    templateUrl: 'header-style.component.html'
                },] },
    ];
    /** @nocollapse */
    HeaderStyleComponent.ctorParameters = [];
    HeaderStyleComponent.propDecorators = {
        'header': [{ type: Input },],
    };
    return HeaderStyleComponent;
}());
