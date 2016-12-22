import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
export var SanitizeHtml = (function () {
    function SanitizeHtml(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtml.prototype.transform = function (v) {
        if (!v) {
            return "";
        }
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    SanitizeHtml.decorators = [
        { type: Pipe, args: [{
                    name: 'sanitizeHtml'
                },] },
    ];
    /** @nocollapse */
    SanitizeHtml.ctorParameters = [
        { type: DomSanitizer, },
    ];
    return SanitizeHtml;
}());
