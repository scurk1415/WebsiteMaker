import { Component, Input } from "@angular/core";
export var OverlayComponent = (function () {
    function OverlayComponent() {
    }
    OverlayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-editor-overlay',
                    templateUrl: 'overlay.component.html',
                    styleUrls: ['overlay.component.css']
                },] },
    ];
    /** @nocollapse */
    OverlayComponent.ctorParameters = [];
    OverlayComponent.propDecorators = {
        'element': [{ type: Input },],
    };
    return OverlayComponent;
}());
