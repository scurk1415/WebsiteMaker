import { Component, Input } from "@angular/core";
import { ControlViews } from "../../shared/enums";
export var HeaderControlComponent = (function () {
    function HeaderControlComponent() {
        this.controlViews = ControlViews;
        this.font_sizes = [];
    }
    HeaderControlComponent.prototype.ngOnInit = function () {
        this.options = {
            url: 'http://localhost:10050/upload'
        };
        this.font_sizes = [
            { text: "Select font size...", value: "" },
            { text: "18px", value: "18px" },
            { text: "24px", value: "24px" },
            { text: "28px", value: "28px" },
            { text: "36px", value: "36px" },
            { text: "42px", value: "42px" },
            { text: "50px", value: "50px" },
            { text: "60px", value: "60px" },
            { text: "72px", value: "72px" },
            { text: "100px", value: "100px" }
        ];
    };
    HeaderControlComponent.prototype.onFileUploaded = function (file) {
        this.header.logo = file;
    };
    /*handleUpload(data): void {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.header.logo = data[0];
        }
    }*/
    HeaderControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-header-control',
                    templateUrl: 'header-control.component.html'
                },] },
    ];
    /** @nocollapse */
    HeaderControlComponent.ctorParameters = [];
    HeaderControlComponent.propDecorators = {
        'header': [{ type: Input },],
        'tmpHeader': [{ type: Input },],
    };
    return HeaderControlComponent;
}());
