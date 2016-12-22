import { Component, Input } from '@angular/core';
export var FooterNormalComponent = (function () {
    function FooterNormalComponent() {
        this.tmpFooter = {
            showControl: false,
            name: "Footer",
            showOverlay: true
        };
    }
    FooterNormalComponent.prototype.ngOnInit = function () { };
    FooterNormalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-footer-normal',
                    templateUrl: 'footer-normal.component.html',
                    styleUrls: ['footer-normal.component.css']
                },] },
    ];
    /** @nocollapse */
    FooterNormalComponent.ctorParameters = [];
    FooterNormalComponent.propDecorators = {
        'footer': [{ type: Input },],
    };
    return FooterNormalComponent;
}());
