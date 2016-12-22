import { Component, Input } from "@angular/core";
import { ControlViews, MainLayoutTypes, FormTypes } from "../../shared/enums";
import { MainItem, FormItem } from "../models/main";
export var MainControlComponent = (function () {
    function MainControlComponent() {
        this.controlViews = ControlViews;
        this.layoutTypes = MainLayoutTypes;
        this.form_types = FormTypes;
        this.form_input_types = [];
        this.edit = new Array();
    }
    MainControlComponent.prototype.ngOnInit = function () {
        if (!this.main.items) {
            this.main.items = [];
        }
        if (!this.main.form_items) {
            this.main.form_items = [];
        }
        this.form_input_types = [
            { text: "Text", value: this.form_types.Text },
            { text: "Email", value: this.form_types.Email },
            { text: "Phone", value: this.form_types.Phone },
            { text: "Message", value: this.form_types.Message },
        ];
    };
    MainControlComponent.prototype.addItem = function () {
        var item = new MainItem("Title");
        this.main.items.push(item);
    };
    MainControlComponent.prototype.addFormItem = function () {
        var item = new FormItem("Email", this.form_types.Email, false);
        this.main.form_items.push(item);
    };
    MainControlComponent.prototype.onFormTypeSelect = function (event, item) {
        item.form_type = event;
    };
    MainControlComponent.prototype.deleteItem = function (item) {
        var index = this.main.items.indexOf(item);
        this.main.items.splice(index, 1);
    };
    MainControlComponent.prototype.onFileUploaded = function (file, item) {
        var itemIndex = this.main.items.indexOf(item);
        this.main.items[itemIndex].image = file;
    };
    MainControlComponent.prototype.keyupHandlerFunction = function (value, item) {
        item.description = value;
    };
    MainControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-main-control',
                    templateUrl: 'main-control.component.html'
                },] },
    ];
    /** @nocollapse */
    MainControlComponent.ctorParameters = [];
    MainControlComponent.propDecorators = {
        'main': [{ type: Input },],
        'tmpMain': [{ type: Input },],
    };
    return MainControlComponent;
}());
