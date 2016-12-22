import { Component, Input } from '@angular/core';
export var HeaderNormalComponent = (function () {
    function HeaderNormalComponent() {
        this.tmpHeader = {
            showControl: false,
            name: "Header",
            showOverlay: true
        };
    }
    HeaderNormalComponent.prototype.ngOnInit = function () { };
    HeaderNormalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-header-normal',
                    templateUrl: 'header-normal.component.html',
                    styleUrls: ['header-normal.component.css']
                },] },
    ];
    /** @nocollapse */
    HeaderNormalComponent.ctorParameters = [];
    HeaderNormalComponent.propDecorators = {
        'header': [{ type: Input },],
    };
    return HeaderNormalComponent;
}());
