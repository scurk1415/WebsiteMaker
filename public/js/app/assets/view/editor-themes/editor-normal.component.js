import { Component, Input } from "@angular/core";
export var EditorNormalComponent = (function () {
    function EditorNormalComponent() {
    }
    EditorNormalComponent.prototype.ngOnInit = function () {
    };
    EditorNormalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-editor-normal',
                    templateUrl: 'editor-normal.component.html'
                },] },
    ];
    /** @nocollapse */
    EditorNormalComponent.ctorParameters = [];
    EditorNormalComponent.propDecorators = {
        'solution': [{ type: Input },],
        'page': [{ type: Input },],
    };
    return EditorNormalComponent;
}());
