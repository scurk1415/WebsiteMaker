import { Component, Input } from '@angular/core';
import { MainLayoutTypes } from "../../../../app/shared/enums";
export var MainScrollComponent = (function () {
    function MainScrollComponent() {
        this.layoutTypes = MainLayoutTypes;
    }
    MainScrollComponent.prototype.ngOnInit = function () {
        this.tmpMain = {
            name: 'Main',
            float: false,
            theme_on: true
        };
    };
    MainScrollComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-main-layout-scroll',
                    templateUrl: 'main-scroll.component.html',
                    styleUrls: ['main-scroll.component.css']
                },] },
    ];
    /** @nocollapse */
    MainScrollComponent.ctorParameters = [];
    MainScrollComponent.propDecorators = {
        'main': [{ type: Input },],
    };
    return MainScrollComponent;
}());
