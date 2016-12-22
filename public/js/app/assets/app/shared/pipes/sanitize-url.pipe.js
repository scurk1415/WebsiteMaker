import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
export var SanitizeUrl = (function () {
    function SanitizeUrl(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeUrl.prototype.transform = function (v) {
        console.log(v);
        if (!v) {
            return "";
        }
        return this._sanitizer.bypassSecurityTrustResourceUrl(v);
    };
    SanitizeUrl.decorators = [
        { type: Pipe, args: [{
                    name: 'sanitizeUrl'
                },] },
    ];
    /** @nocollapse */
    SanitizeUrl.ctorParameters = [
        { type: DomSanitizer, },
    ];
    return SanitizeUrl;
}());
