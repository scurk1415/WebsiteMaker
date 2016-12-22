import { Component, Input } from '@angular/core';
import { AppService } from "../../app.service";
export var NavNormalComponent = (function () {
    function NavNormalComponent(_appSvc) {
        this._appSvc = _appSvc;
    }
    NavNormalComponent.prototype.onPageChange = function (item) {
        this._appSvc.onPageChange(item);
    };
    NavNormalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-nav-normal',
                    templateUrl: 'nav-normal.component.html',
                    styleUrls: ['nav-normal.component.css']
                },] },
    ];
    /** @nocollapse */
    NavNormalComponent.ctorParameters = [
        { type: AppService, },
    ];
    NavNormalComponent.propDecorators = {
        'nav': [{ type: Input },],
        'pages': [{ type: Input },],
    };
    return NavNormalComponent;
}());
