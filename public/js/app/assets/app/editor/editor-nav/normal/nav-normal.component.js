import { Component, Input } from '@angular/core';
export var NavNormalComponent = (function () {
    function NavNormalComponent() {
        this.tmpNav = {
            showControl: false,
            name: "Nav",
            showOverlay: true
        };
    }
    NavNormalComponent.prototype.ngOnInit = function () { };
    NavNormalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-nav-normal',
                    templateUrl: 'nav-normal.component.html',
                    styleUrls: ['nav-normal.component.css']
                },] },
    ];
    /** @nocollapse */
    NavNormalComponent.ctorParameters = [];
    NavNormalComponent.propDecorators = {
        'nav': [{ type: Input },],
        'pages': [{ type: Input },],
    };
    return NavNormalComponent;
}());
