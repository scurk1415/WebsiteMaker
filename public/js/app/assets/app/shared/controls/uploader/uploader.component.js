import { Component, Input, Output, EventEmitter, NgZone } from "@angular/core";
export var UploaderComponent = (function () {
    function UploaderComponent() {
        this.hasBaseDropZoneOver = false;
        this.uploadedFile = new EventEmitter();
        this.response = {};
    }
    UploaderComponent.prototype.ngOnInit = function () {
        this.zone = new NgZone({ enableLongStackTrace: false });
        if (this.inputOptions) {
            this.options = this.inputOptions;
        }
        else {
            this.options = {
                url: 'http://localhost:10050/upload',
                filterExtensions: true,
                allowedExtensions: ['image/png', 'image/jpg'],
                calculateSpeed: true,
                data: {},
                customHeaders: {
                    'custom-header': 'value'
                }
            };
        }
    };
    UploaderComponent.prototype.handleUpload = function (data) {
        if (data && data.response) {
            //this.response = data;
            //this.progress = Math.floor(data.progress.percent / 100);
            data = JSON.parse(data.response);
            this.uploadedFile.emit(data[0]);
        }
    };
    UploaderComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    UploaderComponent.prototype.deleteImage = function () {
        this.hasBaseDropZoneOver = false;
        this.uploadedFile.emit(null);
    };
    UploaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-uploader',
                    templateUrl: './uploader.component.html',
                    styleUrls: ['./uploader.component.css']
                },] },
    ];
    /** @nocollapse */
    UploaderComponent.ctorParameters = [];
    UploaderComponent.propDecorators = {
        'inputFile': [{ type: Input },],
        'inputOptions': [{ type: Input },],
        'width': [{ type: Input },],
        'uploadedFile': [{ type: Output },],
    };
    return UploaderComponent;
}());
