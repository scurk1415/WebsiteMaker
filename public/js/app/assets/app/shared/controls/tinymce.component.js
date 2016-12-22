import { Component, EventEmitter, Input, Output } from '@angular/core';
require('tinymce');
export var TinyMceComponent = (function () {
    function TinyMceComponent() {
        this.onEditorKeyup = new EventEmitter();
    }
    TinyMceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            selector: '#' + this.elementId,
            plugins: ['link', 'paste', 'table', 'code', 'textcolor'],
            toolbar: "undo redo | styleselect fontsizeselect forecolor | bold italic | alignleft aligncenter alignright | link image | code",
            fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
            menubar: false,
            setup: function (editor) {
                _this.editor = editor;
                editor.on("init", function () {
                    editor.setContent(_this.content || "");
                });
                editor.on('change', function () {
                    var content = editor.getContent();
                    _this.onEditorKeyup.emit(content);
                });
            },
        });
    };
    TinyMceComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    TinyMceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-tinymce',
                    template: "<textarea id=\"{{elementId}}\"></textarea>"
                },] },
    ];
    /** @nocollapse */
    TinyMceComponent.ctorParameters = [];
    TinyMceComponent.propDecorators = {
        'elementId': [{ type: Input },],
        'content': [{ type: Input },],
        'onEditorKeyup': [{ type: Output },],
    };
    return TinyMceComponent;
}());
