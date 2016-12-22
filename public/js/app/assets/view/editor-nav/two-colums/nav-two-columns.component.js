import { Component, Input } from '@angular/core';
import { AppService } from "../../app.service";
export var NavTwoColumnsComponent = (function () {
    function NavTwoColumnsComponent(_appSvc) {
        this._appSvc = _appSvc;
    }
    NavTwoColumnsComponent.prototype.onPageChange = function (item) {
        this._appSvc.onPageChange(item);
    };
    NavTwoColumnsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-nav-two-columns',
                    templateUrl: 'nav-two-columns.component.html',
                    styleUrls: ['nav-two-columns.component.css']
                },] },
    ];
    /** @nocollapse */
    NavTwoColumnsComponent.ctorParameters = [
        { type: AppService, },
    ];
    NavTwoColumnsComponent.propDecorators = {
        'nav': [{ type: Input },],
        'pages': [{ type: Input },],
    };
    return NavTwoColumnsComponent;
}());
