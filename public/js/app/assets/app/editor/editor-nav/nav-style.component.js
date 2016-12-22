import { Component } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";
export var NavStyleComponent = (function () {
    function NavStyleComponent() {
        this.font_sizes = [];
    }
    NavStyleComponent.prototype.ngOnInit = function () {
        this.font_sizes = [
            { text: "Select font size...", value: "" },
            { text: "12px", value: "12px" },
            { text: "13px", value: "13px" },
            { text: "14px", value: "14px" },
            { text: "15px", value: "15px" },
            { text: "16px", value: "16px" },
            { text: "17px", value: "17px" },
            { text: "18px", value: "18px" },
            { text: "19px", value: "19px" },
            { text: "20px", value: "20px" },
        ];
    };
    NavStyleComponent.prototype.onFontSizeSelect = function (event) {
        this.nav.font_size = event;
    };
    NavStyleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-nav-style',
                    templateUrl: 'nav-style.component.html'
                },] },
    ];
    /** @nocollapse */
    NavStyleComponent.ctorParameters = [];
    NavStyleComponent.propDecorators = {
        'nav': [{ type: Input },],
    };
    return NavStyleComponent;
}());
