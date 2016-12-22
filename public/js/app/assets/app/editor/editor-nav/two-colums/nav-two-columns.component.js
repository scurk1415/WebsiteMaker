import { Component, Input } from '@angular/core';
export var NavTwoColumnsComponent = (function () {
    function NavTwoColumnsComponent() {
        this.tmpNav = {
            showControl: false,
            name: "Nav",
            showOverlay: false,
            float: true,
            disableDock: true,
            dragPosition: {
                left: '300px',
                top: '50px'
            }
        };
    }
    NavTwoColumnsComponent.prototype.ngOnInit = function () {
    };
    NavTwoColumnsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-nav-two-columns',
                    templateUrl: 'nav-two-columns.component.html',
                    styleUrls: ['nav-two-columns.component.css']
                },] },
    ];
    /** @nocollapse */
    NavTwoColumnsComponent.ctorParameters = [];
    NavTwoColumnsComponent.propDecorators = {
        'nav': [{ type: Input },],
        'pages': [{ type: Input },],
    };
    return NavTwoColumnsComponent;
}());
