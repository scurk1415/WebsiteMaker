import { Component, Input } from "@angular/core";
export var EditorTwoColumnsComponent = (function () {
    function EditorTwoColumnsComponent() {
    }
    EditorTwoColumnsComponent.prototype.ngOnInit = function () {
    };
    EditorTwoColumnsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-editor-two-columns',
                    templateUrl: 'editor-two-columns.component.html'
                },] },
    ];
    /** @nocollapse */
    EditorTwoColumnsComponent.ctorParameters = [];
    EditorTwoColumnsComponent.propDecorators = {
        'solution': [{ type: Input },],
        'page': [{ type: Input },],
    };
    return EditorTwoColumnsComponent;
}());
