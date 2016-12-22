import { Pipe } from "@angular/core";
export var FormatedPrice = (function () {
    function FormatedPrice() {
    }
    FormatedPrice.prototype.transform = function (price) {
        if (!price) {
            return 0;
        }
        return (price / 100).toFixed(2);
    };
    FormatedPrice.decorators = [
        { type: Pipe, args: [{
                    name: 'formatedPrice'
                },] },
    ];
    /** @nocollapse */
    FormatedPrice.ctorParameters = [];
    return FormatedPrice;
}());
